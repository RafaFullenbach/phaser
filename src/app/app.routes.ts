import { Routes } from '@angular/router';
import { StatusComponent } from './presentation/status/status.component';

export const routes: Routes = [
    {path:'', component: StatusComponent},
    {path: '**', redirectTo: ''}
];
