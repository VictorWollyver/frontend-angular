import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './login-reactive-forms.component.html',
  styleUrl: './login-reactive-forms.component.css'
})
export class LoginReactiveFormsComponent {

  authService = inject(AuthService);

  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  })

  isLoading = false;
  errorMessage = "";
  successMessage = "";

  onSubmit() {
    this.isLoading = true;

    this.authService.login(this.loginForm.value.name, this.loginForm.value.password).subscribe(
      {
        next: (data) => {
          this.isLoading = false;
          this.successMessage = "Login realizado com sucesso!";
          this.errorMessage = "";
          window.localStorage.setItem("token", data.data.token);
          console.log("Token armazenado:", data);
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMessage = err.error.message || "Erro ao fazer login";
          this.successMessage = "";
        },
        complete: () => {
          this.isLoading = false
        }
      });
  }
}
