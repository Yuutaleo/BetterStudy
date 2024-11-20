import { Component, inject, Input } from '@angular/core';
import { MateriaComponent } from '../materia/materia.component';
import { RouterModule } from '@angular/router';
import { Materia, Nome } from '../materia';
import { MateriaService } from '../materia.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, MateriaComponent, CommonModule],
  // templateUrl: './dashboard.component.html',
  template: `
  <app-dashboard *ngFor="let nom of nomeList" [nom]="nom" ></app-dashboard>
  <div>
  <app-materia *ngFor="let teste of materiaList" [mat]="teste"></app-materia>
  </div>
  
  <h2>this</h2>`,
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  materiaList: Materia[] = [];
  nomeList: Nome[] = [];
  materiaService: MateriaService = inject(MateriaService);

  constructor() {
    this.materiaList = this.materiaService.getAllMaterias();
  }
  @Input() nom!:Nome;
}
