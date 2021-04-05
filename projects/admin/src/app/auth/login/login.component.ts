import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbAuthResult, NbAuthService } from '@nebular/auth';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    private destroy$ = new Subject<void>();
    isAuthenticated$!: Observable<boolean>;

    constructor(private authService: NbAuthService) {
        this.isAuthenticated$ = this.authService.onAuthenticationChange();
    }

    ngOnInit(): void { }

    login() {
        this.authService.authenticate('google')
            .pipe(take(1))
            .subscribe((authResult: NbAuthResult) => { });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}
