import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponentComponent } from './user-component/user-component.component';


const routes: Routes = [
  {path: 'random', component: UserComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
