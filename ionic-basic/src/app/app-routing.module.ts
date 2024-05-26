import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SeguridadRutasGuard } from './seguridad-rutas.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  
  {
    path:'main',
    children: [
      {
        path: 'presupuesto',
        loadChildren: () => import('./presupuesto/presupuesto.module').then( m => m.PresupuestoPageModule)
      },
      {
        path: 'alumnos',
        loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosPageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'receptor',
        loadChildren: () => import('./receptor/receptor.module').then( m => m.ReceptorPageModule)
      },
      {
        path: 'pelicula',
        loadChildren: () => import('./pelicula/pelicula.module').then( m => m.PeliculaPageModule)
      },
      {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
      },
      {
        path: 'destinos',
        loadChildren: () => import('./destinos/destinos.module').then( m => m.DestinosPageModule)
      },
      {
        path: 'detalle-pelicula',
        loadChildren: () => import('./detalle-pelicula/detalle-pelicula.module').then( m => m.DetallePeliculaPageModule)
      },
      {
        path: 'destino-api',
        loadChildren: () => import('./destino-api/destino-api.module').then( m => m.DestinoApiPageModule)
      },
      {
        path: 'galeria',
        loadChildren: () => import('./galeria/galeria.module').then( m => m.GaleriaPageModule)
      }
    ],
    canActivate: [SeguridadRutasGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'destino-api',
    loadChildren: () => import('./destino-api/destino-api.module').then( m => m.DestinoApiPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }