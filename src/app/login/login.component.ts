import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: `
    <section>
      <h2>Faça login para continuar...</h2>
      <form>
        <input type="text" placeholder="Usuário" >
        <input type="text" placeholder="Senha" >
        <button class="primario" type="button">Confirmar</button>
      </form>
      
  `,
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
