import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch:'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'persons', component: PersonsComponent},
  {path: 'detail/:id', component: PersonDetailComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
