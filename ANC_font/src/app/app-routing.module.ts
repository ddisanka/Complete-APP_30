import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularCRUDComponent } from './angular-crud/angular-crud.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

import { StudentAddComponent } from './student-add/student-add.component';
import { CourseCrudComponent } from './course-crud/course-crud.component';
import { AuthGuard } from './core/authentication/auth.guard';

const routes: Routes = 
[
  {path:'student',component:AngularCRUDComponent, canActivate:[AuthGuard] },
  {path:'course',component:CourseCrudComponent, canActivate:[AuthGuard]},

  { path: 'auth-callback', component: AuthCallbackComponent },
  //{ path: '**', redirectTo: '', pathMatch: 'full' }
 // {path:'**',redirectTo:'home'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
