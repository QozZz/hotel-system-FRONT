import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HotelListComponent} from './hotel-list.component';
import {HotelListRoutingModule} from './hotel-list-routing.module';
import { HotelComponent } from './hotel/hotel.component';


@NgModule({
  declarations: [
    HotelListComponent,
    HotelComponent
  ],
  imports: [
    CommonModule,
    HotelListRoutingModule
  ]
})
export class HotelListModule {
}
