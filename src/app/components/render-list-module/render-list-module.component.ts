import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments';
import { CommonModule } from '@angular/common';

interface IUser {
  id: number;
  name: string;
  password: string;
}

@Component({
  selector: 'app-render-list-module',
  imports: [CommonModule],
  templateUrl: './render-list-module.component.html',
  styleUrl: './render-list-module.component.css'
})
export class RenderListModuleComponent implements OnInit  {
  users: Array<IUser> = []
  isError = ""
  isSuccess = ""

  async ngOnInit() {
    try {
      const response = await fetch(environment.API_URL + "/users")
      if(!response.ok) throw new Error("Não foi possivel buscar os usuários")
      const data = await response.json()
      console.log(data)
      this.users = data
      this.isSuccess = "Usuários buscados com sucesso"
    } catch (error: unknown) {
      if(error instanceof Error) {
        this.isError = error.message
      }
      this.isError = "Erro genérico"
    }
  }

  activeAlert(message: string) {
    alert(message)
  }
}
