import {FormGroup} from '@angular/forms';

export class PasswordValidator {
  static repeatPassword(group: FormGroup): { [key: string]: boolean } {
    if (group.controls.password.value !== group.controls.repeatPassword.value) {
      return {repeatPassword: true};
    }
    return null;
  }
}
