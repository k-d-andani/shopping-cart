import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NbAuthModule, NbOAuth2AuthStrategy, NbOAuth2ResponseType } from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbFirebaseAuthModule } from '@nebular/firebase-auth';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { environment } from 'projects/frontend/src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { CallbackComponent } from './auth/callback/callback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        CallbackComponent
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
