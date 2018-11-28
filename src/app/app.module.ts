import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//Importar Paginas Generadas
import {
  PrincipalPage,
  AlcaldePage,
  AudienciasPage,
  EventosPage,
  QrInformatePage,
  TramitesPage,
  TurismoPage,
  HistoriaPage,
  EmergenciasPage,
  PagorefPage,
  NosotrosPage,
  BolsatrabajoPage,
  SitiosPage,
  SitiosComercialesPage,
  DondecomerPage,
  CatedralPage,
  MuseoPage,
  SantoPage,
  DatosPage,
  BibliotecaPage,
  GaribayPage,
  AngelesPage,
  ZoologicoPage,
  CapillaPage,
  HuapalcalcoPage,
  BalnearioPage,
  CaracolPage,
  CafeteriaPage,
  FeriaPage,
  PueblosPage
} from "../pages/index.paginas";

@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    AlcaldePage,
    EventosPage,
    QrInformatePage,
    TramitesPage,
    AudienciasPage,
    TurismoPage,
    HistoriaPage,
    EmergenciasPage,
    PagorefPage,
    NosotrosPage,
    YoutubePipe,
    BolsatrabajoPage,
    SitiosPage,
    SitiosComercialesPage,
    DondecomerPage,
    CatedralPage,
    MuseoPage,
    SantoPage,
    DatosPage,
    BibliotecaPage,
    GaribayPage,
    AngelesPage,
    ZoologicoPage,
    CapillaPage,
    HuapalcalcoPage,
    BalnearioPage,
    CaracolPage,
    CafeteriaPage,
    FeriaPage,
    PueblosPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp){
    backButtonText: 'Regresar'
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    AlcaldePage,
    EventosPage,
    QrInformatePage,
    TramitesPage,
    AudienciasPage,
    TurismoPage,
    HistoriaPage,
    EmergenciasPage,
    PagorefPage,
    NosotrosPage,
    BolsatrabajoPage,
    SitiosPage,
    SitiosComercialesPage,
    DondecomerPage,
    CatedralPage,
    MuseoPage,
    SantoPage,
    DatosPage,
    BibliotecaPage,
    GaribayPage,
    AngelesPage,
    ZoologicoPage,
    CapillaPage,
    HuapalcalcoPage,
    BalnearioPage,
    CaracolPage,
    CafeteriaPage,
    FeriaPage,
    PueblosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
