import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RentRoomDto} from '../../../shared/models/RentRoomDto';

@Component({
  selector: 'app-rent-room-form',
  templateUrl: './rent-room-form.component.html',
  styleUrls: ['./rent-room-form.component.scss']
})
export class RentRoomFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<any>();

  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      rentStart: new FormControl(
        ''),
      rentEnd: new FormControl(
        ''),
    });
  }

  submit() {
    console.log(this.form.value);
    const rentRoomDto: RentRoomDto = {
      rentStart: this.form.value.rentStart,
      rentEnd: this.form.value.rentEnd
    };
    this.onSubmit.emit(rentRoomDto);
  }
}
