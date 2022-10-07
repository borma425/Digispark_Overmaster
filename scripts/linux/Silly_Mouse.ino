
#include <DigiMouse.h>

void setup() {
  DigiMouse.begin(); //start or reenumerate USB - BREAKING CHANGE from old versions that didn't require this
}

void loop() {
  DigiMouse.moveY(1); 
  DigiMouse.delay(50);
  DigiMouse.moveY(-1); 
  DigiMouse.delay(50);
  DigiMouse.moveY(1); 
  DigiMouse.delay(100);
  DigiMouse.moveY(-1); 
  DigiMouse.delay(500);
  DigiMouse.moveY(1); 
  DigiMouse.delay(50);
  DigiMouse.moveY(-1); 
  DigiMouse.delay(50);
  DigiMouse.moveY(1); 
  DigiMouse.delay(100);
  DigiMouse.moveY(-1); 
  DigiMouse.delay(500);
}