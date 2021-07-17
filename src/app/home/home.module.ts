import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { NgCalendarModule } from 'ionic2-calendar';
import { HomePageRoutingModule } from './home-routing.module';
import { PopoverComponent } from '../popover/popover.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    NgCalendarModule  
  ],
  entryComponents:[PopoverComponent],
  declarations: [HomePage,PopoverComponent]
})
export class HomePageModule {}
