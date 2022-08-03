import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent  {

  miRegistro: FormGroup = this.fb.group({
    name: ['test2', [Validators.required]],
    email: ['test2@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  })

  constructor(private fb: FormBuilder,
    private router: Router,
    private AuthService: AuthService) { }
  registro(){

    const { name, email, password } = this.miRegistro.value;

    this.AuthService.registro(name, email, password)
    .subscribe( ok =>{

      if ( ok === true ) {
        this.router.navigateByUrl('/dashboard')
      } else {
        Swal.fire('Error', ok, 'error')
      }

    })
    console.log(this.miRegistro.value)
    this.router.navigateByUrl('/dashboard')
  }
}
