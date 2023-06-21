#include <SoftwareSerial.h>
SoftwareSerial bluet(8,9);
int lampada = 3;
char letra;
void setup() {
 pinMode(lampada, OUTPUT);
bluet.begin(9600);
}

void loop() {
if(bluet.available()){
  letra = bluet.read();
}
if(letra == 'A'){
  digitalWrite(lampada, HIGH);
}
if(letra == 'a'){
  digitalWrite(lampada, LOW);
}

}
