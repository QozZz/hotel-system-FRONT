import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SignUpDto} from '../../shared/models/SignUpDto';
import {PasswordValidator} from '../../shared/validators/password.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  @Input() signUpBlockOpen: boolean;
  @Output() onSignUp = new EventEmitter();

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
      repeatPassword: new FormControl(
        '',
        [Validators.required],
      ),
    }, [PasswordValidator.repeatPassword]);
  }

  submit() {
    const signUpDto: SignUpDto = {
      email: this.form.value.email,
      password: this.form.value.password,
      repeatPassword: this.form.value.repeatPassword,
    };
    this.onSignUp.emit(signUpDto);
  }


}
