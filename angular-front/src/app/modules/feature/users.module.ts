import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicDetailModule } from '../shared/academic-detail.module';
import { AcademicListModule } from '../shared/academic-list.module';
import { GlobalComponentsModule } from '../shared/global-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../shared/directives.module';
import { MaterialModule } from '../shared/libraries/material.module';
import { PipesModule } from '../shared/pipes.module';
import { UserDetailComponent } from '../../pages/user-detail/user-detail.component';
import { UserDashboardComponent } from '../../pages/user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [ 
    UserDetailComponent, 
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    AcademicDetailModule,
    AcademicListModule,
    GlobalComponentsModule,
    ReactiveFormsModule,
    DirectivesModule,
    MaterialModule,
    PipesModule,
  ],
  exports: [
    UserDetailComponent,
    UserDashboardComponent
   ]
})
export class UsersModule { }
