import {AddressDto} from './AddressDto';

export interface HotelDto {
  id: number;
  name: string;
  stars: number;
  description: string;
  hasPool: boolean;
  hasRestaurant: boolean;
  addressDto: AddressDto;
}
