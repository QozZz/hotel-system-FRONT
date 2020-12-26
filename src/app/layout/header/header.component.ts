import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {HttpResponse} from '@angular/common/http';
import {LoginDto} from '../../shared/models/LoginDto';
import {SignUpDto} from '../../shared/models/SignUpDto';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginBlockOpen = false;
  signUpBlockOpen = false;
  isLoggedIn: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('Authorization') !== null;
  }

  logIn(loginDto: LoginDto) {
    console.log(loginDto);
    this.authService.login(loginDto).subscribe(response => {
      this.setToken(response);
    });
    this.loginBlockOpen = !this.loginBlockOpen;
  }

  signUp(signUpDto: SignUpDto) {
    console.log(signUpDto);
    this.authService.signUp(signUpDto).subscribe(() => {
    });
    this.signUpBlockOpen = !this.signUpBlockOpen;
  }

  logOut() {
    this.setToken(null);
    localStorage.removeItem('Authorization');
    this.router.navigate(['/']);
    this.isLoggedIn = !this.isLoggedIn;
  }

  private setToken(response: HttpResponse<any> | null) {
    if (response) {
      this.isLoggedIn = !this.isLoggedIn;
      localStorage.setItem('Authorization', response.headers.get('Authorization'));
    } else {
      localStorage.clear();
    }
  }

  public get token(): string {
    return localStorage.getItem('Authorization');
  }
}
