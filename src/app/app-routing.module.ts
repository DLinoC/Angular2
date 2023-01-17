import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmblemasComponent } from './pages/emblemas/emblemas.component';
import { HomeComponent } from './pages/home/home.component';
import { RolesComponent } from './pages/roles/roles.component';

const routes: Routes = [
  {
    path:'emblemas',
    component:EmblemasComponent,
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'roles',
    component:RolesComponent,
  },
 {
  path: '**', 
  redirectTo: '/home', 
  pathMatch: 'full'
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
