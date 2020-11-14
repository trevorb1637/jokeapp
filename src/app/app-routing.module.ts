import { NONE_TYPE } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomjokeComponent } from './randomjoke/randomjoke.component';
import { TenjokesComponent } from './tenjokes/tenjokes.component';

const routes: Routes = [{path: 'randomjoke', component: RandomjokeComponent }, {path: 'tenjokes', component: TenjokesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
