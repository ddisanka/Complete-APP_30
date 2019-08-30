import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators'
import { AuthServiceService } from '../../core/authentication/auth.service.service';
import { TopSecretService } from '../top-secret.service';

@Component({
  selector: 'top-secret-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  claims=null;
  busy: boolean;

  constructor(private authService: AuthServiceService, private topSecretService: TopSecretService, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {    
    this.busy = true;
    this.spinner.show();
    this.topSecretService.fetchTopSecretData(this.authService.authorizationHeaderValue)
    .pipe(finalize(() => {
      this.spinner.hide();
      this.busy = false;
    })).subscribe(
    result => {         
      this.claims = result;
   });
  }
}
