import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

const routeConfig: Routes = [
    { path: '',
    component: HomeComponent,
    title: 'Home Page of Daniel Seguin, Organist'
    },
    { path: 'detail/:id',
    component: DetailComponent,
    title: 'Details Page'
    }
];

export default routeConfig;
