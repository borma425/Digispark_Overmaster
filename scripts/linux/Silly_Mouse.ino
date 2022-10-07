#include <DigiMouse.h>

void setup() {
  DigiMouse.begin(); //start or reenumerate USB - BREAKING CHANGE from old versions that didn't require this
}

void loop() {
  DigiMouse.moveY(1); 
  DigiMouse.delay(500);
  DigiMouse.moveY(-1); 
  DigiMouse.delay(500);
  DigiMouse.moveX(-100); 
  DigiMouse.delay(500);
  DigiMouse.moveY(-1); 
  DigiMouse.delay(500);
  DigiMouse.moveX(-1000); 
  DigiMouse.delay(500);
  DigiMouse.moveY(-900);   
  
}
