import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HotelListComponent} from './hotel-list.component';
import {HotelComponent} from './hotel/hotel.component';

const routes: Routes = [
  {
    path: '',
    component: HotelListComponent,
  },
  {
    path: ':id',
    component: HotelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelListRoutingModule {
}
