import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'user/:userID', component: UserComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
