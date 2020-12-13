import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HotelListComponent} from './hotel-list.component';
import {HotelListRoutingModule} from './hotel-list-routing.module';
import {HotelItemComponent} from './hotel-item/hotel-item.component';
import {HotelComponent} from './hotel/hotel.component';
import {RoomListComponent} from './room-list/room-list.component';
import { RoomItemComponent } from './room-item/room-item.component';


@NgModule({
  declarations: [
    HotelListComponent,
    HotelItemComponent,
    HotelComponent,
    RoomListComponent,
    RoomItemComponent
  ],
  imports: [
    CommonModule,
    HotelListRoutingModule
  ]
})
export class HotelListModule {
}
