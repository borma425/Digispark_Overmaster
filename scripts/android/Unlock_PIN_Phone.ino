#include "DigiKeyboard.h"

void setup() {
  pinMode(0, OUTPUT);
  delay(5000); 
}

char buf [11]; 
     
void loop() {

  DigiKeyboard.sendKeyStroke(0);
  for (int i = 0; i <= 10000; i++) {
    sprintf (buf, "%04i", i) ;
    DigiKeyboard.println(buf);
  }
  digitalWrite(0, HIGH);  
  delay(2000);        
  digitalWrite(0, LOW); 
  delay(2000); 
  DigiKeyboard.delay(5000);
}