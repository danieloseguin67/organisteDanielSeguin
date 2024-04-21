import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';
import { SpecialrequestComponent } from './specialrequest/specialrequest.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { AdminComponent } from './admin/admin.component';

const routeConfig: Routes = [
    { path: '',
    component: HomeComponent,
    title: 'Home Page of Daniel Seguin, Organist'
    },
    { path: 'detail/:id',
    component: DetailComponent,
    title: 'Details Page'
    },
    { path: 'about',
    component: AboutComponent,
    title: 'About Organist Page'
    },
    { path: 'specialrequest',
    component: SpecialrequestComponent,
    title: 'Special Request Page'
    },
    { path: 'contactme',
    component: ContactmeComponent,
    title: 'Contact Organist Page'
    },
    { path: 'admin',
    component: AdminComponent,
    title: 'Songs Administrator Page'
    }
];

export default routeConfig;
