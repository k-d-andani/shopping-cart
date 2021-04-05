import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CallbackComponent } from './auth/callback/callback.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'callback',
        component: CallbackComponent,
    },
    {
        path: 'dashboard',
        component: AppComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
