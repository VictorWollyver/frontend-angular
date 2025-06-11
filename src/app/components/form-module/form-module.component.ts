import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-form-module',
  imports: [FormsModule],
  templateUrl: './form-module.component.html',
  styleUrl: './form-module.component.css'
})

export class FormModuleComponent {

  private userService = inject(UserService)

  dataForm = {
    name: "",
    password: ""
  }

  isLoading = false
  errorMessage = ""
  successMessage = ""

  async onSubmit(form: NgForm) {
    if(!form.valid) return this.errorMessage = "Preencha todas as informações do formulario"

    return this.userService.postUser(this.dataForm).subscribe((data) => {
      console.log(data)
    })
  }
}
