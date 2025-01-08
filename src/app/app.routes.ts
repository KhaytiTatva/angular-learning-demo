import { Routes } from '@angular/router';
import { FormControlComponent } from './pages/form-control/form-control.component';

export const routes: Routes = [
    { path: '', redirectTo: '/form-control', pathMatch: 'full' },
    { path: 'form-control', component: FormControlComponent },
];
