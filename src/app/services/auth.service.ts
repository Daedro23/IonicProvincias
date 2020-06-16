import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logeado = false;

  constructor(private router: Router) { }

  usuarioLogeado() {
    this.logeado = !this.logeado;
    if (this.logeado === false) {
      this.router.navigate(['/login']);
    } else if (this.logeado === true) {
      this.router.navigate(['/home']);
    }
  }
}
