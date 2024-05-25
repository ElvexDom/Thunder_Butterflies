import { Routes } from '@angular/router';
import { AnimalViewComponent } from './views/animal-view/animal-view.component';
import { ChevalViewComponent } from './views/cheval-view/cheval-view.component';

export const routes: Routes = [
    { path: '', redirectTo: '/animal', pathMatch: 'full' },
    { path: 'animal', component: AnimalViewComponent },
    { path: 'cheval', component: ChevalViewComponent },
    { path: 'chien', loadComponent: () => import('./views/chien-view/chien-view.component').then(mod => mod.ChienViewComponent)},
    { path: 'cheval/:id', loadComponent: () => import('./views/cheval-detail/cheval-detail.component').then(mod => mod.ChevalDetailComponent)}
];