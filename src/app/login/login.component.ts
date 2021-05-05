import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:MyServiceService,private routes:Router) { }
  msg;
  ngOnInit() {
    
  }
  login(txtEmail:string,txtPassword:string){
    var output = this.service.checkLogin(txtEmail,txtPassword);
    if(output==true){
      this.routes.navigate(['home']);
    }
    else
    {
      this.msg="invalid username password (please enter Email:krupali@gmail.com Password:krupali)";
      
    }
   
  }
}
