import { Routes } from '@angular/router';
import { MateriaComponent } from './materia/materia.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login',
    },
    {
        path: 'materias',
        component: MateriaComponent,
        title: 'Matérias',
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard Notas',
    },
];
