import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'projects/admin/src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbAuthModule, NbOAuth2AuthStrategy } from '@nebular/auth';
import { NbFirebaseAuthModule } from '@nebular/firebase-auth';
import { LoginComponent } from './auth/login/login.component';
import { CallbackComponent } from './auth/callback/callback.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { MenuCategoryComponent } from './components/menu/menu-category/menu-category.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { HomeComponent } from './components/home/home.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        CallbackComponent,
        MenuComponent,
        MenuCategoryComponent,
        MenuItemComponent,
        HomeComponent,
        OrderStatusComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        NbThemeModule.forRoot({ name: 'dark' }),
        NbLayoutModule,
        NbEvaIconsModule,
        NbFirebaseAuthModule,
        NbAuthModule.forRoot({
            strategies: [
                NbOAuth2AuthStrategy.setup(environment.google)
            ]
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
