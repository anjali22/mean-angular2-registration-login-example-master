﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { customHttpProvider } from './_helpers/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { DessertinComponent } from './dessertin/dessertin.component';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/index';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        DessertinComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        NavbarComponent,
        ProfileComponent
    ],
    providers: [
        customHttpProvider,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }