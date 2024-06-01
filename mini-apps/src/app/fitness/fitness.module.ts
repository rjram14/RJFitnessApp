import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitnessRoutingModule } from './fitness-routing.module';
import { FitnessComponent } from './fitness.component';


@NgModule({
  declarations: [
    FitnessComponent
  ],
  imports: [
    CommonModule,
    FitnessRoutingModule
  ]
})
export class FitnessModule { }
