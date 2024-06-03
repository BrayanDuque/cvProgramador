import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"about",
        component: AboutComponent
    },
    {
        path:"proyects",
        component: ProyectsComponent
    },
    {
        path: "contact",
        component: ContactComponent
    }
];
