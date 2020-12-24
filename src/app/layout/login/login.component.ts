import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginDto} from '../../shared/models/LoginDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  @Input() loginBlockOpen: boolean;
  @Output() onLogin = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(
        '',
        [Validators.email, Validators.required]
      ),
      password: new FormControl(
        '',
        [Validators.required, Validators.minLength(4)]
      ),
    });
  }

  submit() {
    const loginDto: LoginDto = {
      email: this.form.value.email,
      password: this.form.value.password,
    };
    this.onLogin.emit(loginDto);
  }

}
