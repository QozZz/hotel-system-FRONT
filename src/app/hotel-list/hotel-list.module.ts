import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HotelListComponent} from './hotel-list.component';
import {HotelListRoutingModule} from './hotel-list-routing.module';
import {HotelItemComponent} from './hotel-item/hotel-item.component';
import {HotelComponent} from './hotel/hotel.component';
import {RoomListComponent} from './room-list/room-list.component';
import {RoomItemComponent} from './room-item/room-item.component';
import {RoomComponent} from './room/room.component';
import {RentRoomFormComponent} from './forms/rent-room-form/rent-room-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HotelListComponent,
    HotelItemComponent,
    HotelComponent,
    RoomListComponent,
    RoomItemComponent,
    RoomComponent,
    RentRoomFormComponent
  ],
  imports: [
    CommonModule,
    HotelListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HotelListModule {
}
