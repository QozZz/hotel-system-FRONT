import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: 'hotels',
    loadChildren: () => import('../app/hotel-list/hotel-list.module').then(m => m.HotelListModule),
  },
  // {path: 'error', component: NotFoundPageComponent},
  // {path: '**', redirectTo: '/error'},
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
