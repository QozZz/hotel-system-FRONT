import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: 'hotels',
    loadChildren: () => import('../app/hotel-list/hotel-list.module').then(m => m.HotelListModule),
  },
  {
    path: '**', component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: []
})
export class AppRoutingModule {
}
