import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthServiceService } from '../../core/authentication/auth.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 

  constructor(private authService: AuthServiceService, private spinner: NgxSpinnerService) { }    
  
    title = "Login";
    
    login() {     
      this.spinner.show();
      this.authService.login();
    }   

    ngOnInit() {
    }
}


 