import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-module',
  imports: [FormsModule],
  templateUrl: './form-module.component.html',
  styleUrl: './form-module.component.css'
})
export class FormModuleComponent {
  dataForm = {
    name: "",
    password: ""
  }

  isLoading = false
  errorMessage = ""
  successMessage = ""

  async onSubmit(form: NgForm) {
    if(!form.valid) return this.errorMessage = "Preencha todas as informações do formulario"
    try {
      this.isLoading = true
      const response = await fetch("http://localhost:3333/users/create", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.dataForm)
      })
      if(!response.ok) throw new Error("Não foi possivel criar um usuário")
      const data = await response.json()
      console.log(data)
      this.successMessage = "Usuário criado com sucesso"
      this.errorMessage = ""
      return
    }catch(e: unknown) {
      this.successMessage = ""
      if(e instanceof Error) {
        return this.errorMessage = e.message
      }
      return this.errorMessage = 'Erro desconhecido ao criar usuário.'
    }finally {
      this.isLoading = false
    }
  }
}
