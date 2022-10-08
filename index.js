
/*

Witten by Borma

It took [ 70 hours = 10 hours per day at week ] to fully program the tool

My Facebook :

https://www.facebook.com/borma425/

Twitter :

https://twitter.com/borma425

*/


var defaultScript = `#define IS_SEND_TWICE       // If defined, key gets sent again after 1 sec. Comment out to disable

#include "DigiKeyboard.h"

void setup() {

    // don't need to set anything up to use DigiKeyboard

}

void loop() {


}`;

 

const fetchFunc = async (uri) => {
    let response = await fetch(uri);
    let jsonResponse = await response.text()
    return jsonResponse;
}




const Keyboard_values = `



MOD_CONTROL_LEFT  Left Ctrl key
MOD_SHIFT_LEFT  Left Shift key
MOD_ALT_LEFT  Left Alt key
MOD_GUI_LEFT  Left Windows key
MOD_CONTROL_RIGHT Right Ctrl key
MOD_SHIFT_RIGHT Right Shift key
MOD_ALT_RIGHT Right Alt key
MOD_GUI_RIGHT Right Windows key




#define KEY_NOKEY             0x00     // Reserved (no event indicated)
#define KEY_ERR_ROLLOVER      0x01     // Keyboard ErrorRollOver
#define KEY_POSTFAIL          0x02     // Keyboard POSTFail
#define KEY_ERR_UNDEFINED     0x03     // Keyboard ErrorUndefined
#define KEY_A                 0x04     // Keyboard a and A
#define KEY_B                 0x05     // Keyboard b and B
#define KEY_C                 0x06     // Keyboard c and C
#define KEY_D                 0x07     // Keyboard d and D
#define KEY_E                 0x08     // Keyboard e and E
#define KEY_F                 0x09     // Keyboard f and F
#define KEY_G                 0x0A     // Keyboard g and G
#define KEY_H                 0x0B     // Keyboard h and H
#define KEY_I                 0x0C     // Keyboard i and I
#define KEY_J                 0x0D     // Keyboard j and J
#define KEY_K                 0x0E     // Keyboard k and K
#define KEY_L                 0x0F     // Keyboard l and L
#define KEY_M                 0x10     // Keyboard m and M
#define KEY_N                 0x11     // Keyboard n and N
#define KEY_O                 0x12     // Keyboard o and O
#define KEY_P                 0x13     // Keyboard p and P
#define KEY_Q                 0x14     // Keyboard q and Q
#define KEY_R                 0x15     // Keyboard r and R
#define KEY_S                 0x16     // Keyboard s and S
#define KEY_T                 0x17     // Keyboard t and T
#define KEY_U                 0x18     // Keyboard u and U
#define KEY_V                 0x19     // Keyboard v and V
#define KEY_W                 0x1A     // Keyboard w and W
#define KEY_X                 0x1B     // Keyboard x and X
#define KEY_Y                 0x1C     // Keyboard y and Y
#define KEY_Z                 0x1D     // Keyboard z and Z
#define KEY_1                 0x1E     // Keyboard 1 and !
#define KEY_2                 0x1F     // Keyboard 2 and
#define KEY_3                 0x20     // Keyboard 3 and #
#define KEY_4                 0x21     // Keyboard 4 and $
#define KEY_5                 0x22     // Keyboard 5 and %
#define KEY_6                 0x23     // Keyboard 6 and ^
#define KEY_7                 0x24     // Keyboard 7 and &
#define KEY_8                 0x25     // Keyboard 8 and *
#define KEY_9                 0x26     // Keyboard 9 and (
#define KEY_0                 0x27     // Keyboard 0 and )
#define KEY_ENTER             0x28     // Keyboard Return (ENTER)
#define KEY_ESCAPE            0x29     // Keyboard ESCAPE
#define KEY_DELETE            0x2A     // Keyboard DELETE (Backspace)
#define KEY_TAB               0x2B     // Keyboard Tab
#define KEY_SPACE             0x2C     // Keyboard Spacebar
#define KEY_MINUS             0x2D     // Keyboard - and (underscore)
#define KEY_EQUAL             0x2E     // Keyboard = and +
#define KEY_L_BRACKET         0x2F     // Keyboard [ and {
#define KEY_R_BRACKET         0x30     // Keyboard ] and }
#define KEY_BACKSLASH         0x31     // Keyboard \ and |
#define KEY_HASH              0x32     // Keyboard Non-US # and ~
#define KEY_SEMICOLON         0x33     // Keyboard ; and :
#define KEY_APOSTROPHE        0x34     // Keyboard â€˜ and â€œ
#define KEY_GRAVE             0x35     // Keyboard Grave Accent and Tilde
#define KEY_COMMA             0x36     // Keyboard , and <
#define KEY_DOT               0x37     // Keyboard . and >
#define KEY_SLASH             0x38     // Keyboard / and ?
#define KEY_CAPS_LOCK         0x39     // Keyboard Caps Lock
#define KEY_F1                0x3A     // Keyboard F1
#define KEY_F2                0x3B     // Keyboard F2
#define KEY_F3                0x3C     // Keyboard F3
#define KEY_F4                0x3D     // Keyboard F4
#define KEY_F5                0x3E     // Keyboard F5
#define KEY_F6                0x3F     // Keyboard F6
#define KEY_F7                0x40     // Keyboard F7
#define KEY_F8                0x41     // Keyboard F8
#define KEY_F9                0x42     // Keyboard F9
#define KEY_F10               0x43     // Keyboard F10
#define KEY_F11               0x44     // Keyboard F11
#define KEY_F12               0x45     // Keyboard F12
#define KEY_PRTSCN            0x46     // Keyboard PrintScreen
#define KEY_SCR_LOCK          0x47     // Keyboard Scroll Lock
#define KEY_PAUSE             0x48     // Keyboard Pause
#define KEY_INSERT            0x49     // Keyboard Insert
#define KEY_HOME              0x4A     // Keyboard Home
#define KEY_PAGE_UP           0x4B     // Keyboard PageUp
#define KEY_DELETE            0x4C     // Keyboard Delete Forward
#define KEY_END               0x4D     // Keyboard End
#define KEY_PAGE_DOWN         0x4E     // Keyboard PageDown
#define KEY_ARROW_RIGHT       0x4F     // Keyboard RightArrow
#define KEY_ARROW_LEFT        0x50     // Keyboard LeftArrow
#define KEY_ARROW_DOWN        0x51     // Keyboard DownArrow
#define KEY_ARROW_UP          0x52     // Keyboard UpArrow

#define KEY_RIGHT_ARROW       0x4F     // Keyboard RightArrow  -> Alternative arrow keys names
#define KEY_LEFT_ARROW        0x50     // Keyboard LeftArrow
#define KEY_DOWN_ARROW        0x51     // Keyboard DownArrow
#define KEY_UP_ARROW          0x52     // Keyboard UpArrow

#define KEY_NUM_LOCK          0x53     // Keypad Num Lock and Clear
#define KEY_KPAD_SLASH        0x54     // Keypad /
#define KEY_KPAD_TIMES        0x55     // Keypad *
#define KEY_KPAD_MINUS        0x56     // Keypad -
#define KEY_KPAD_PLUS         0x57     // Keypad +
#define KEY_KPAD_ENTER        0x58     // Keypad ENTER
#define KEY_KPAD_1            0x59     // Keypad 1 and End
#define KEY_KPAD_2            0x5A     // Keypad 2 and Down Arrow
#define KEY_KPAD_3            0x5B     // Keypad 3 and PageDn
#define KEY_KPAD_4            0x5C     // Keypad 4 and Left Arrow
#define KEY_KPAD_5            0x5D     // Keypad 5
#define KEY_KPAD_6            0x5E     // Keypad 6 and Right Arrow
#define KEY_KPAD_7            0x5F     // Keypad 7 and Home
#define KEY_KPAD_8            0x60     // Keypad 8 and Up Arrow
#define KEY_KPAD_9            0x61     // Keypad 9 and PageUp
#define KEY_KPAD_0            0x62     // Keypad 0 and Insert
#define KEY_KPAD_DOT          0x63     // Keypad . and Delete
#define KEY_INTL_BACKSLASH    0x64     // Keyboard Non-US \ and |
#define KEY_APPLICATION       0x65     // Keyboard Application
#define KEY_POWER             0x66     // Keyboard Power
#define KEY_KPAD_EQUAL        0x67     // Keypad =
#define KEY_F13               0x68     // Keyboard F13
#define KEY_F14               0x69     // Keyboard F14
#define KEY_F15               0x6A     // Keyboard F15
#define KEY_F16               0x6B     // Keyboard F16
#define KEY_F17               0x6C     // Keyboard F17
#define KEY_F18               0x6D     // Keyboard F18
#define KEY_F19               0x6E     // Keyboard F19
#define KEY_F20               0x6F     // Keyboard F20
#define KEY_F21               0x70     // Keyboard F21
#define KEY_F22               0x71     // Keyboard F22
#define KEY_F23               0x72     // Keyboard F23
#define KEY_F24               0x73     // Keyboard F24
#define KEY_EXECUTE           0x74     // Keyboard Execute
#define KEY_HELP              0x75     // Keyboard Help
#define KEY_MENU              0x76     // Keyboard Menu
#define KEY_SELECT            0x77     // Keyboard Select
#define KEY_STOP              0x78     // Keyboard Stop
#define KEY_AGAIN             0x79     // Keyboard Again
#define KEY_UNDO              0x7A     // Keyboard Undo
#define KEY_CUT               0x7B     // Keyboard Cut
#define KEY_COPY              0x7C     // Keyboard Copy
#define KEY_PASTE             0x7D     // Keyboard Paste
#define KEY_FIND              0x7E     // Keyboard Find
#define KEY_MUTE              0x7F     // Keyboard Mute
#define KEY_VOLUME_UP         0x80     // Keyboard Volume Up
#define KEY_VOLUME_DOWN       0x81     // Keyboard Volume Down
#define KEY_LOCK_CAPS_LOCK    0x82     // Keyboard Locking Caps Lock
#define KEY_LOCK_NUM_LOCK     0x83     // Keyboard Locking Num Lock
#define KEY_LOCK_SCR_LOCK     0x84     // Keyboard Locking Scroll Lock
#define KEY_KPAD_COMMA        0x85     // Keypad Comma
#define KEY_EQUAL_SIGN        0x86     // Keypad Equal Sign
#define KEY_INTL1             0x87     // Keyboard International1
#define KEY_INTL2             0x88     // Keyboard International2
#define KEY_INTL3             0x89     // Keyboard International3
#define KEY_INTL4             0x8A     // Keyboard International4
#define KEY_INTL5             0x8B     // Keyboard International5
#define KEY_INTL6             0x8C     // Keyboard International6
#define KEY_INTL7             0x8D     // Keyboard International7
#define KEY_INTL8             0x8E     // Keyboard International8
#define KEY_INTL9             0x8F     // Keyboard International9
#define KEY_LANG1             0x90     // Keyboard LANG1
#define KEY_LANG2             0x91     // Keyboard LANG2
#define KEY_LANG3             0x92     // Keyboard LANG3
#define KEY_LANG4             0x93     // Keyboard LANG4
#define KEY_LANG5             0x94     // Keyboard LANG5
#define KEY_LANG6             0x95     // Keyboard LANG6
#define KEY_LANG7             0x96     // Keyboard LANG7
#define KEY_LANG8             0x97     // Keyboard LANG8
#define KEY_LANG9             0x98     // Keyboard LANG9
#define KEY_ALT_ERASE         0x99     // Keyboard Alternate Erase
#define KEY_SYSREQ            0x9A     // Keyboard SysReq/Attention
#define KEY_CANCEL            0x9B     // Keyboard Cancel
#define KEY_CLEAR             0x9C     // Keyboard Clear
#define KEY_PRIOR             0x9D     // Keyboard Prior
#define KEY_RETURN            0x9E     // Keyboard Return
#define KEY_SEPARATOR         0x9F     // Keyboard Separator
#define KEY_OUT               0xA0     // Keyboard Out
#define KEY_OPER              0xA1     // Keyboard Oper
#define KEY_CLEAR             0xA2     // Keyboard Clear/Again
#define KEY_CRSEL             0xA3     // Keyboard CrSel/Props
#define KEY_EXSEL             0xA4     // Keyboard ExSel
                                       // Keys 0xA5 to 0xAF reserved
#define KEY_KPAD_00           0xB0     // Keypad 00
#define KEY_KPAD_000          0xB1     // Keypad 000
#define KEY_THOUSANDS_SEP     0xB2     // Thousands Separator
#define KEY_DECIMAL_SEP       0xB3     // Decimal Separator
#define KEY_CURRENCY          0xB4     // Currency Unit
#define KEY_SUB_CURRENCY      0xB5     // Currency Sub-unit
#define KEY_KPAD_LEFT_PAREN   0xB6     // Keypad (
#define KEY_KPAD_RIGHT_PAREN  0xB7     // Keypad )
#define KEY_KPAD_LEFT_BRACE   0xB8     // Keypad {
#define KEY_KPAD_RIGHT_BRACE  0xB9     // Keypad }
#define KEY_KPAD_TAB          0xBA     // Keypad Tab
#define KEY_KPAD_BACKSPACE    0xBB     // Keypad Backspace
#define KEY_KPAD_A            0xBC     // Keypad A
#define KEY_KPAD_B            0xBD     // Keypad B
#define KEY_KPAD_C            0xBE     // Keypad C
#define KEY_KPAD_D            0xBF     // Keypad D
#define KEY_KPAD_E            0xC0     // Keypad E
#define KEY_KPAD_F            0xC1     // Keypad F
#define KEY_KPAD_XOR          0xC2     // Keypad XOR
#define KEY_KPAD_CARET        0xC3     // Keypad ^
#define KEY_KPAD_PERCENT      0xC4     // Keypad %
#define KEY_KPAD_LESS_THAN    0xC5     // Keypad <
#define KEY_KPAD_GREAT_THAN   0xC6     // Keypad >
#define KEY_KPAD_AND          0xC7     // Keypad &
#define KEY_KPAD_DBL_AND      0xC8     // Keypad &&
#define KEY_KPAD_OR           0xC9     // Keypad |
#define KEY_KPAD_DBL_OR       0xCA     // Keypad ||
#define KEY_KPAD_COLON        0xCB     // Keypad :
#define KEY_KPAD_HASH         0xCC     // Keypad #
#define KEY_KPAD_SPACE        0xCD     // Keypad Space
#define KEY_KPAD_AT           0xCE     // Keypad @
#define KEY_KPAD_EXCLAMATION  0xCF     // Keypad !
#define KEY_KPAD_MEM_STORE    0xD0     // Keypad Memory Store
#define KEY_KPAD_MEM_RECALL   0xD1     // Keypad Memory Recall
#define KEY_KPAD_MEM_CLEAR    0xD2     // Keypad Memory Clear
#define KEY_KPAD_MEM_ADD      0xD3     // Keypad Memory Add
#define KEY_KPAD_MEM_SUB      0xD4     // Keypad Memory Subtract
#define KEY_KPAD_MEM_MULTIPLY 0xD5     // Keypad Memory Multiply
#define KEY_KPAD_MEM_DIVIDE   0xD6     // Keypad Memory Divide
#define KEY_PLUS_MINUS        0xD7     // Keypad +/-
#define KEY_CLEAR             0xD8     // Keypad Clear
#define KEY_CLEAR_ENTRY       0xD9     // Keypad Clear Entry
#define KEY_BINARY            0xDA     // Keypad Binary
#define KEY_OCTAL             0xDB     // Keypad Octal
#define KEY_DECIMAL           0xDC     // Keypad Decimal
#define KEY_HEXADECIMAL       0xDD     // Keypad Hexadecimal
                                       // Keys 0xDE to 0xDF reserved
#define KEY_L_CONTROL         0xE0     // Keyboard LeftControl
#define KEY_L_SHIFT           0xE1     // Keyboard LeftShift
#define KEY_L_ALT             0xE2     // Keyboard LeftAlt
#define KEY_L_GUI             0xE3     // Keyboard Left GUI
#define KEY_R_CONTROL         0xE4     // Keyboard RightControl
#define KEY_R_SHIFT           0xE5     // Keyboard RightShift
#define KEY_R_ALT             0xE6     // Keyboard RightAlt
#define KEY_R_GUI             0xE7     // Keyboard Right GUI


`;




var data = `


{

  "devmode": false,


 "icons": {
    "print": {
        "svg": "xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path d='M11 12l-7.071 7.071-1.414-1.414L8.172 12 2.515 6.343 3.929 4.93 11 12zm0 7h10v2H11v-2z' fill='rgba(149,164,166,1)'/>",
        "title": "print Text",
        "description": "print Text"
        },
    "cmd": {
        "svg": " xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path d='M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9 12v2h6v-2h-6zm-3.586-3l-2.828 2.828L7 16.243 11.243 12 7 7.757 5.586 9.172 8.414 12z'/>",
        "title": "Open Cmd.exe",
        "description": "Open The CMD"
        },
        "cmdAsAdmin": {
            "svg": " xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path d='M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9 12v2h6v-2h-6zm-3.586-3l-2.828 2.828L7 16.243 11.243 12 7 7.757 5.586 9.172 8.414 12z'/>",
            "title": "Open Cmd.exe As root",
            "description": "Open The CMD"
            },
       "closeCmd": {
        "svg": " xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path d='M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9 12v2h6v-2h-6zm-3.586-3l-2.828 2.828L7 16.243 11.243 12 7 7.757 5.586 9.172 8.414 12z'/>",
        "title": "Close Cmd.exe",
        "description": "Close The CMD"
        },
        "Enter": {
         "svg": " xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path d='M10 8h4V6.5a3.5 3.5 0 1 1 3.5 3.5H16v4h1.5a3.5 3.5 0 1 1-3.5 3.5V16h-4v1.5A3.5 3.5 0 1 1 6.5 14H8v-4H6.5A3.5 3.5 0 1 1 10 6.5V8zM8 8V6.5A1.5 1.5 0 1 0 6.5 8H8zm0 8H6.5A1.5 1.5 0 1 0 8 17.5V16zm8-8h1.5A1.5 1.5 0 1 0 16 6.5V8zm0 8v1.5a1.5 1.5 0 1 0 1.5-1.5H16zm-6-6v4h4v-4h-4z' fill='rgba(47,204,113,1)'/>",
         "title": "Enter Key",
         "description": "Enter Key"
         },
       "Wallpaper_Changer": {
        "svg": " xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path d='M20 5H4v14l9.292-9.294a1 1 0 0 1 1.414 0L20 15.01V5zM2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' fill='rgba(230,126,34,1)'/>",
        "title": "Wallpaper Changer ",
        "description": "Open The CMD"
        },
        "Specific_Keys": {
         "svg": "<svg  class='ml-2'  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path d='M3 17h18v2H3v-2zm0-6h3v3H3v-3zm5 0h3v3H8v-3zM3 5h3v3H3V5zm10 0h3v3h-3V5zm5 0h3v3h-3V5zm-5 6h3v3h-3v-3zm5 0h3v3h-3v-3zM8 5h3v3H8V5z' fill='rgba(50,152,219,1)'/>",
         "title": "Specific Keys",
         "description": "Enter Specific Keys"
         }
        ,
       "Sleep_Time": {
        "svg": "<svg  class='ml-2'  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path d='M6.382 5.968A8.962 8.962 0 0 1 12 4c2.125 0 4.078.736 5.618 1.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 1 1-14.064 0L3.515 5.93l1.414-1.414 1.453 1.453zM13 12V7.495L8 14h3v4.5l5-6.5h-3zM8 1h8v2H8V1z' fill='rgba(241,196,14,1)'/>",
        "title": "Sleep Time",
        "description": "Open The CMD"
        }
        ,
       "Restart": {
        "svg": " xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path d='M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795z' fill='rgba(236,240,241,1)'/>",
        "title": "Restart",
        "description": "Open The CMD"
        }
        ,
        "Shutdown": {
         "svg": " xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path d='M6.265 3.807l1.147 1.639a8 8 0 1 0 9.176 0l1.147-1.639A9.988 9.988 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.988 9.988 0 0 1 4.265-8.193zM11 12V2h2v10h-2z' fill='rgba(255,255,255,1)'/>",
         "title": "Shutdown",
         "description": "Open The CMD"
         }




}


}


`;




const obj = JSON.parse(data);

const widgets = document.getElementById("widgets");
const Controller = document.getElementById("Controller");

const yourEscape = {
    "timeline": []
};






var webMinor = document.getElementById("overmaster");

webMinor.value = defaultScript;


var result = new String( "" );


function Builder_pattern(command,input){

// input = (input) ? 1 : 2;


const sendKeyStroke = (n1) =>{ return `\nDigiKeyboard.sendKeyStroke(${n1});\n`; }
const delay         = (n1) =>{ return `\nDigiKeyboard.delay(${n1});\n`;
}
const print         = (n1) =>{ return `DigiKeyboard.println("${n1}");\n`;
}
const Enter         = (n1) =>{ return `${sendKeyStroke("KEY_ENTER")}`;
}

const cmd           = (n1="dir") =>{return `${
    sendKeyStroke(0)+
    sendKeyStroke("KEY_D, MOD_GUI_LEFT")+
    delay(500)+
    sendKeyStroke("KEY_R, MOD_GUI_LEFT")+
    delay(500)+
    print(n1)+
    Enter()+
    delay(500)

    }`;

}

const cmdAsAdmin           = (n1="dir") =>{return `${
    sendKeyStroke("0, MOD_GUI_LEFT")+
    delay(1500)+
    print("c;d")+
    delay(1500)+
    sendKeyStroke("KEY_ENTER, MOD_CONTROL_LEFT | MOD_SHIFT_LEFT")+
    delay(1000)+
    sendKeyStroke("0")+
    sendKeyStroke("KEY_ARROW_LEFT")+
    delay(500)+
    Enter()+

    delay(500)+
    print(n1)+
    Enter()+
    delay(500)

    }`;

}

const closeCmd           = (n1) =>{return `${
 delay(500) +
 print("exit") +
 Enter()
}`;

}

const Sleep_Time           = (n1) =>{return `${
    delay(n1)
   }`;
}

const Shutdown           = (n1) =>{return `${
    cmdAsAdmin("shutdown /s")+
    delay(1000)+
    sendKeyStroke("0")+
    sendKeyStroke("KEY_ARROW_LEFT")+
    delay(500)+
    Enter()
   }`;
}

const Restart           = (n1) =>{return `${
    cmdAsAdmin("shutdown /s")+
    delay(1000)+
    sendKeyStroke("0")+
    sendKeyStroke("KEY_ARROW_LEFT")+
    delay(500)+
    Enter()
   }`;

}


const Wallpaper_Changer           = (n1) =>{return
cmd()+
print(`$client.DownloadFile(\"${n1}\" , \"doge.jpg\")`)+
Enter()+
delay(500)+
print(`reg add \"HKCU\\Control Panel\\Desktop\" /v WallPaper /d \"%USERPROFILE%\\doge.jpg\" /f`)+
delay(500)+
Enter()+
delay(500)+
print(`RUNDLL32.EXE USER32.DLL,UpdatePerUserSystemParameters ,1 ,True`)+
Enter()+
delay(500)+
closeCmd();

}




const Specific_Keys           = (n1) =>{

var outputKeys = [];

let inputList = n1.split("+");





for (let [i, v] of inputList.entries() ) {

var currentKey = v.toUpperCase();

var whitelistKeys = [
"MOD_CONTROL_LEFT",
"MOD_SHIFT_LEFT",
"MOD_ALT_LEFT",
"MOD_GUI_LEFT",
"MOD_CONTROL_RIGHT",
"MOD_SHIFT_RIGHT",
"MOD_ALT_RIGHT",
"MOD_GUI_RIGHT"
];






if(whitelistKeys.includes(currentKey) !== false ){ // true

outputKeys.push(currentKey);

}else{


let patternHex = "0[xX][0-9a-fA-F]+";
let regex = new RegExp("#define\\sKEY_"+currentKey+".*#?("+patternHex+")","g");
var HexKey =  Keyboard_values.match(regex)[0]  || null;
HexKey = HexKey.match(new RegExp(patternHex,"g"))[0];
outputKeys.push(HexKey);


}





if (i + 1 === inputList.length){

outputKeys = outputKeys.sort(Intl.Collator().compare);

const sortStroke = (outputKeys.length === 3) ? outputKeys.join(', ').replace(/, ([^,]*)$/, ' | $1') : outputKeys.join(',');


return `\nDigiKeyboard.sendKeyStroke(${sortStroke});\n`;

}




}

}



let output = new String( eval(`  ${command}('${input}');`) );

result = result + "\n" + output;



}






// add buttons to widgets side
for (const [key, value] of Object.entries(obj.icons)) {


widgets.innerHTML += `

<button id="${key}" class="h-8  bg-transparent  text-gray-300 font-semibold  py-0.5 px-4 border-2 border-gray-500 rounded mx-0.5 flex items-center">

${value.title}

<svg class='ml-2' ${value.svg} </svg>

</button>


`;

}










function CodeBuilder(){

setTimeout(function(){

document.querySelectorAll('[data-escape]').forEach((elm, idx,array) => {

elementData = JSON.parse( elm.getAttribute("data-escape") );
var decodedString = atob(elementData["data"]);


if (idx + 1 === array.length){

Builder_pattern( elementData["id"] ,decodedString);
const pattern_func = "loop";
const regex_func = new RegExp(/\bloop\s*\(\)\s*\{\s*([^\}]*)/);
let text = editor.getValue();

text = text.replace(regex_func, `${pattern_func}(){  \n
DigiKeyboard.update();
DigiKeyboard.sendKeyStroke(0);
DigiKeyboard.delay(500);\n  ${result}  \n\n` );

editor.setValue(text);


}

});

}, 600); //Time before execution


}









widgets.addEventListener('click', function(e) {



currentID =  e.target.id;

if (currentID != widgets.getAttribute( 'id' ) && currentID){

var infoIcons = obj.icons[currentID],
widgetsList = yourEscape['timeline'];


const HTMLButton         = (n1="") => Controller.innerHTML += `

<div class="relative flex flex-row ml-8 space-x-8 py-2  items-center">

<button data-escape='${n1}' class="w-8 h-8 rounded-full bg-white border-8 border-pink-900"> </button>

<span class="text-gray-400">   >   ${infoIcons.title}</span>
<svg class="absolute right-6 mt-0.5" ${infoIcons.svg}></svg>

</div>


`;


whitelist = ["Wallpaper_Changer","cmd","cmdAsAdmin","print","Sleep_Time","Specific_Keys"];

if(whitelist.includes(currentID) !== false ){


const user_input = window.prompt(infoIcons.description);

if (user_input && user_input.trim()) {


var encodedString = btoa(user_input);
var jsonData = `{"id":"${currentID}","data":"${encodedString}"}`;


HTMLButton(jsonData);





}else {

logsFile(false,"Error dialog receives input");
return;

}



}else{

jsonData = `{"id":"${currentID}","data":""}`;

HTMLButton(jsonData);

}

widgetsList.push(currentID);

CodeBuilder();

logsFile(true,infoIcons.title);



}else{

logsFile(null,"outside unknown ");

}


});





Controller.addEventListener('click', function(e) {

var attr = "data-escape",
    elm = e.target,
    currentData =  elm.getAttribute(attr),
    elmParent = elm.parentElement;


if ( elm.hasAttribute(attr) && currentData ){

index= [...elmParent.parentElement.children].indexOf(elm.parentElement);

var removedID = yourEscape['timeline'][index];
var infoIcons = obj.icons[removedID];


yourEscape['timeline'].splice(index, 1);

elmParent.remove();

result = "";

ResetTextarea();

CodeBuilder();


logsFile(false,infoIcons.title);



}else{

logsFile(null,"outside unknown ");

}


});




function logsFile(type=false,msg="demo"){


let d = new Date(); //actual time in miliseconds
let timeNow = d.toJSON().slice(0,10);

var ts = d / 1E3 | 0;

statusColor = (type) ? "text-green-600" : (type !== null) ? "text-red-700" : "text-yellow-600";

statusText = (type) ? "accepted" : (type !== null) ? "deleted" : "Warning";

document.getElementById("logsFile").innerHTML += `

<div class="flex  text-sm">
    <span class="text-cyan-400 px-0.5">${msg}</span>
    <span class="text-yellow-400 px-0.5">${timeNow}/${ts} </span>
    <span class="${statusColor} px-0.5">${statusText}</span>
    <span class="text-yellow-400 px-0.5">type/avr</span>
    <span class="text-white px-0.5">attiny85</span>
</div>


`;



}







var editor = CodeMirror.fromTextArea(webMinor, {
    lineNumbers: true,
    lineWrapping: true,
    mode: "python",
    htmlMode: true,
    theme: "blackboard",
    tabSize: 4,
    indentUnit: 4
    });

function editorControl(type="add",editor, line, text) {
line = line-1
var textType = (type==="add") ? `${text}\n` : "";
editor.replaceRange(textType, { line, ch: 0 }, { line });

}








function ResetTextarea() {

editor.setValue(defaultScript);

}




function ducky_To_digi_Convert() {

let text = editor.getValue();
const opts = {
    no_flash_str: true
};

    let out;
    try {
        out = ducky2digi(text,opts);
    } catch (e) {
        out = e;
    }

    editor.setValue(out);





};




function copy() {
    copyTextToClipboard( editor.getValue() );
}



function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}













document.querySelectorAll('#mainContainerButtons>button').forEach((elm, index) => {

elm.addEventListener('click', function(e) {

currentELement = document.querySelector('#mainContainer>.block');
nextElement    = document.querySelector(`#mainContainer>:nth-child(${index + 1})`);
currentELement.classList.add('hidden');
currentELement.classList.remove('block');
nextElement.classList.add('block');
nextElement.classList.remove('hidden');


});


});















var directory_Tree = "",
Scripts = document.querySelector("#Scripts > ol");


fetchFunc("./dataJSON/scripts.json").then(result => {

let jsonData =  JSON.parse(result) ;
jsonData = jsonData["folders"];

Object.keys(jsonData).forEach(function(key) {



directory_Tree = `
<li class="mt-2 ml-4">
<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

<!-- folder name -->
<div class="flex mr-2 text-gray-200">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2z" fill="rgba(232,200,125,1)"/></svg>
    <span class="px-1 text-base">${key}</span>
</div>
<!-- end folder -->

<div class="flex flex-col">

`;



jsonData[key].forEach(function(obj, idx, array) {


directory_Tree = directory_Tree + `
<!-- file -->
<button data-path="${obj.path}" class="flex itms-center ml-2 mt-1.5">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M9 2.003V2h10.998C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6-5.997zM5.83 8H9V4.83L5.83 8zM11 4v5a1 1 0 0 1-1 1H5v10h14V4h-8z" fill="rgba(231,241,241,1)"/></svg>
    <span class="px-1.5 -mt-0.5 text-gray-300">${obj.filename}</span>
</button>
<!-- end file -->

`;


});


directory_Tree = directory_Tree + `
</div>

</li>`;

Scripts.innerHTML += directory_Tree;

directory_Tree = "";

});


});












Scripts.addEventListener('click', function(e) {

const currentClick = e.target,
attr = "data-path";

if( currentClick.hasAttribute(attr) || currentClick.parentElement.hasAttribute(attr)  ){

const pathFile = currentClick.closest("button").getAttribute(attr);


fetchFunc(`./scripts/${pathFile}`).then(result => {

editor.setValue(result);

}).catch((error) => {

editor.setValue(defaultScript);

});


}else{

logsFile(null,"outside unknown ");

}


});

