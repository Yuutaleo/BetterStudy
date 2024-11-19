import { Component, Input } from '@angular/core';
import { Materia } from '../materia'

@Component({
  selector: 'app-materia',
  standalone: true,
  imports: [],
  template: `
    <section class="materia">
      <h2 class="materia-nome">{{ materia.nome }}</h2>
      <p class="materia-nota">{{ materia.nota }} - {{ materia.abc }}</p>
    </section>
  `,
  styleUrl: './materia.component.scss'
})
export class MateriaComponent {
  materiaList: Materia[] = [
    {
      'id': 0,
      'nome': 'Manejos Agrícolas de Trato Culturais e Colheita',
      'nota': "4.7",
      'abc': 'A'
    },
    {
      'id': 1,
      'nome': 'Empreendedorismo',
      'nota': "4.3",
      'abc': 'A'
    },
    {
      'id': 2,
      'nome': 'Redes de Computadores',
      'nota': "3.5",
      'abc': 'B'
    },
    {
      'id': 3,
      'nome': 'Web Semântica',
      'nota': "2.1",
      'abc': 'C'
    },
    {
      'id': 4,
      'nome': 'Algoritmos Avançados',
      'nota': "3.5",
      'abc': 'B'
    },
  ];
  @Input() materia!:Materia;
}
