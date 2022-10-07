#include "DigiKeyboard.h"
void setup() {
  //empty
}

void loop() {
  delay(5);
  DigiKeyboard.sendKeyStroke(41);
  delay(500);
 // DigiKeyboard.sendKeyStroke(41);
  //delay(500);
  DigiKeyboard.print("your pass");
  DigiKeyboard.delay(500);
  DigiKeyboard.sendKeyStroke(KEY_ENTER);
  DigiKeyboard.delay(500);

  for (;;) {
    /*empty*/
  }
}