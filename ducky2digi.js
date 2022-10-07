function ducky2digi(inp, opts={}) {
    let loop       = opts.loop         !== undefined ?  opts.loop         : false;
    let flash_str  = opts.no_flash_str !== undefined ? !opts.no_flash_str : true;
    let init_delay = opts.init_delay   !== undefined ?  opts.init_delay   : 1000;

    const MAP = {
        "GUI":            "MOD_GUI_LEFT",
        "WINDOWS":        "MOD_GUI_LEFT",
        "SHIFT":          "MOD_SHIFT_LEFT",
        "ALT":            "MOD_ALT_LEFT",
        "CONTROL":        "MOD_CONTROL_LEFT",
        "CTRL":           "MOD_CONTROL_LEFT",

        "CTRL-ALT":       "MOD_CONTROL_LEFT | MOD_ALT_LEFT",
        "CTRL-SHIFT":     "MOD_CONTROL_LEFT | MOD_SHIFT_LEFT",
        "COMMAND-OPTION": "MOD_GUI_LEFT | MOD_ALT_LEFT",
        "ALT-SHIFT":      "MOD_ALT_LEFT | MOD_SHIFT_LEFT",
        "ALT-TAB":        "43, MOD_ALT_LEFT",

        "APP":            "101",
        "MENU":           "101",

        "UPARROW":        "82",
        "UP":             "82",

        "DOWNARROW" :     "81",
        "DOWN":           "81",

        "LEFTARROW":      "80",
        "LEFT":           "80",

        "RIGHTARROW":     "79",
        "RIGHT":          "79",

        "BREAK":          "72",
        "PAUSE":          "72",

        "ESC":            "41",
        "ESCAPE":         "41",

        "ENTER":          "KEY_ENTER",
        "CAPSLOCK":       "57",
        "DELETE":         "42",
        "END":            "77",
        "HOME":           "74",
        "NUMLOCK":        "83",
        "PAGEUP":         "75",
        "PAGEDOWN":       "78",
        "PRINTSCREEN":    "70",
        "SCROLLLOCK":     "71",
        "SPACE":          "44",
        "TAB":            "43"
    };

    const NOT_IMPL = [
        "ATTACKMODE",

        "WAIT_FOR_BUTTON_PRESS",
        "BUTTON_DEF",
        "ENABLE_BUTTON",
        "DISABLE_BUTTON",

        "LED_R",
        "LED_G",
        "LED_OFF",

        "HOLD",
        "RELEASE",
        "RESET",

        "IF",
        "WHILE",

        "FUNCTION",
        "EXTENSION",
        "DEFINE",

        "SAVE_HOST_KEYBOARD_LOCK_STATE",
        "RESTORE_HOST_KEYBOARD_LOCK_STATE",

        "RANDOM_NUMBER",
        "RANDOM_CHARACTER",
        "RANDOM_LOWERCASE_LETTER",
        "RANDOM_SPECIAL",

        "WAIT_FOR_STORAGE_INACTIVITY",
        "HIDE_PAYLOAD",
        "RESTART_PAYLOAD",
        "EXFIL"
    ];

    function err(e) {
        throw Error(e);
    }

    function nope(i, k) {
        err(`${i}: Key '${k}' not found`);
    }

    function get_key(k) {
        if (k.length == 1) {
            return "KEY_" + k.toUpperCase();
        } else {
            let m = k.match(/^F(1?[1-9])$/);
            if (m != null) {
                return "KEY_F" + m[1];
            } else {
                return MAP[k];
            }
        }
    }

    let vars = {};

    let res = "";

    res += '#include "DigiKeyboard.h"\n\n';
  //  res += "// Converted By Borma Tool" ;
    if (loop) {
        res += "void setup() {}\n\n";
        res += "void loop() {\n";
    } else {
        res += "void loop() {}\n\n";
        res += "void setup() {\n";
    }

    res += "  DigiKeyboard.sendKeyStroke(0);\n";
    if (init_delay > 0) {
        res += "  DigiKeyboard.delay(" + init_delay + ");\n";
    }

    // the default delay if specified by user
    let def_delay = 0;

    // last command. used if repeat was used
    let last_cmd;

    // main loop
    let i = 0;
    for (let line of inp.split("\n")) {
        ++i;
        line = line.trim();
        if (line.length == 0) { // skip empty lines
            continue;
        }
        let space = line.indexOf(" ");
        let cmd, arg;
        if (space != -1) {
            cmd = line.substring(0, space).trim();
            arg = line.substring(space + 1).trim();
        } else {
            cmd = line.trim();
            arg = undefined;
        }

        if (NOT_IMPL.includes(cmd)) {
            err(`'${cmd}' is not implemented yet`);

        } else if (cmd == "DEFAULTDELAY" || cmd == "DEFAULT_DELAY") {
            def_delay = Number(arg);
            continue;

        } else if (cmd == "REM") {
            res += "  // " + arg + "\n";
            continue;

        } else if (cmd == "STRING" || cmd == "STRINGLN") {
            if (cmd == "STRINGLN") {
                last_cmd = "DigiKeyboard.println(";
            } else {
                last_cmd = "DigiKeyboard.print(";
            }
            if (flash_str) {
                last_cmd += "F(";
            }
            last_cmd += JSON.stringify(arg) + ")"; // escape chars
            if (flash_str) {
                last_cmd += ")";
            }
            last_cmd += ";";
            res += "  " + last_cmd + "\n";

        } else if (cmd == "DELAY") {
            last_cmd = "DigiKeyboard.delay(" + arg + ");";
            res += "  " + last_cmd + "\n";

        } else if (cmd == "REPEAT") {
            res += "  for (int i = 0; i < " + arg + "; ++i)\n";
            res += "    " + last_cmd + "\n";

        } else {
            // Variables
            if (cmd == "VAR" ||
                (cmd.startsWith("$") && arg && arg.startsWith("="))) {
                let name, val;
                if (cmd == "VAR") {
                    arg = arg.split("=");
                    name = arg[0].trim().substring(1);
                    val = arg[1].trim();
                } else {
                    name = cmd.substring(1);
                    val = arg.split("=")[1].trim();
                }
                if (val == "TRUE")  val = 1;
                if (val == "FALSE") val = 0;
                if (vars[name]) {
                    res += `  ${name} = ${val};\n`;
                } else {
                    vars[name] = val;
                    res += `  int ${name} = ${val};\n`;
                }

            // Keys
            } else if (arg != undefined) { // MOD key is used
                const mod = MAP[cmd];
                const key = get_key(arg);
                if (!mod) nope(i, cmd);
                if (!key) nope(i, arg);
                res += "  DigiKeyboard.sendKeyStroke(" + key + ", " +
                    mod + ");\n";
            } else {
                const key = get_key(cmd);
                if (!key) nope(i, cmd);
                res += "  DigiKeyboard.sendKeyStroke(" + key + ");\n";
            }
        }
        if (def_delay != 0) {
            res += "  DigiKeyboard.delay(" + def_delay + ");\n";
        }
    }

    res += "}";

    return res;
}

