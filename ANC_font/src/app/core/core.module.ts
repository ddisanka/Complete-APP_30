import { NgModule, Optional, SkipSelf } from '@angular/core'; 
import { AuthServiceService } from './authentication/auth.service.service';
import { AuthGuard } from './authentication/auth.guard';
 

@NgModule({
  imports: [
  ],
  providers: [
    AuthServiceService,
    AuthGuard    
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }

}