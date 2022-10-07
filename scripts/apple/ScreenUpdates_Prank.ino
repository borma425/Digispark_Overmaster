//Witten by V.hopf 
// For more info email me at this email address: jidiparts@gmail.com
//Website: https://jidiparts.wordpress.com/
#include <DigiKeyboard.h>

int i = 1;
void setup() {
  DigiKeyboard.delay(200);
  DigiKeyboard.sendKeyStroke(0);
}
void loop() {
  delay(600);
  while(i==1){
    DigiKeyboard.sendKeyStroke(KEY_SPACE, MOD_GUI_LEFT);//Command to open spotlight search.                           
    DigiKeyboard.print("saf");//Types the thing to be searched in spotlight.
    DigiKeyboard.sendKeyStroke(KEY_ENTER);//Press ENTER key
    DigiKeyboard.delay(200);//Pause for 200 milliseconds
    DigiKeyboard.sendKeyStroke(MOD_GUI_LEFT, KEY_T);
    DigiKeyboard.delay(200);
    DigiKeyboard.print("https://updatefaker.com/windows10/index.html");// Go to web address: _________
    DigiKeyboard.sendKeyStroke(KEY_ENTER);//Press ENTER key
    DigiKeyboard.delay(400);//Pause for 400 milliseconds
    DigiKeyboard.sendKeyStroke(MOD_GUI_LEFT, KEY_F| MOD_CONTROL_LEFT);//Go full screen~!!!
    i = 2;// Stops the code from repeating
  }
}