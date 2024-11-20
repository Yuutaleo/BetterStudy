import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Materia } from '../materia'

@Component({
  selector: 'app-materia',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="materia">
      <h2 class="materia-nome">{{mat.nome}}</h2>
      <p class="materia-nota">{{mat.nota}}</p>
    </section>
  `,
  styleUrl: './materia.component.scss'
})
export class MateriaComponent {
  @Input() mat!:Materia;
}
