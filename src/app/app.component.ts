import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent {
  title = 'angular-tour-of-heroes';
   hellow(){
var email=(<HTMLInputElement>document.getElementById("emails")).value;

var password=(<HTMLInputElement>document.getElementById("password")).value;

if(email=="oshanlakshitha146@gmail.com" && password=="12345"){
alert("Confirm")
}else{
alert("loging Fail") 
}
}
}