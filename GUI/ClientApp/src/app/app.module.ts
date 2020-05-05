import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { RouterModule } from '@angular/router';
import {routes} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    LoadingComponent,
    RegistrarUsuarioComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(routes, {useHash :true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
