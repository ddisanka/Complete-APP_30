import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators'
import { AuthServiceService } from '../../core/authentication/auth.service.service';
import { UserRegistration } from '../../shared/models/user.registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  success: boolean;
  error: string;
  userRegistration: UserRegistration = { name: '', email: '', password: '' };
  submitted: boolean = false;

  constructor(private authService: AuthServiceService, private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
  }

  onSubmit() {

    this.spinner.show();

    this.authService.register(this.userRegistration)
      .pipe(finalize(() => {
        this.spinner.hide();
      }))
      .subscribe(
        result => {
          if (result) {
            this.success = true;
          }
        },
        error => {
          this.error = error;
        });
  }
}
