import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HotelListComponent} from './hotel-list.component';
import {HotelListRoutingModule} from './hotel-list-routing.module';


@NgModule({
  declarations: [
    HotelListComponent
  ],
  imports: [
    CommonModule,
    HotelListRoutingModule
  ]
})
export class HotelListModule {
}
