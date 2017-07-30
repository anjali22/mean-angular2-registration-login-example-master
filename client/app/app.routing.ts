import { Routes, RouterModule } from '@angular/router';
import { DessertinComponent } from './dessertin/dessertin.component';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
//import { NavbarComponent} from './navbar/navbar.component';

const appRoutes: Routes = [
    {path: '', component: DessertinComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);