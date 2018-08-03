import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// components
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth';
import {TestPlayerComponent} from './pages/test-player/test-player.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/pages/pages.module#PagesModule',
    canActivate: [AuthGuard]
  }, {
    path: 'login',
    component: LoginComponent
  }, {    // Test Video Player
    path: 'test-player',
    component: TestPlayerComponent
  }, {    // logout - temp
    path: 'logout',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {    // otherwise redirect to pages module
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [
      RouterModule
    ]
})

export class AppRoutingModule {}
