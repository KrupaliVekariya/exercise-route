import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  checkLogin(txtEmail:string,txtPassword:string){
    if(txtEmail == "krupali@gmail.com" && txtPassword == "krupali"){
      localStorage.setItem('txtEmail',"krupali@gmail.com");
      return true;
    }
    else{
      return false;
    }
  }
}
