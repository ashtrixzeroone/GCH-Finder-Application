import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'details1',
    loadChildren: () => import('./details1/details1.module').then( m => m.Details1PageModule)
  },
  {
    path: 'details2',
    loadChildren: () => import('./details2/details2.module').then( m => m.Details2PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'routeg',
    loadChildren: () => import('./routeg/routeg.module').then( m => m.RoutegPageModule)
  },
  {
    path: 'routeg1',
    loadChildren: () => import('./routeg1/routeg1.module').then( m => m.Routeg1PageModule)
  },
  {
    path: 'routeg2',
    loadChildren: () => import('./routeg2/routeg2.module').then( m => m.Routeg2PageModule)
  },
  {
    path: 'details3',
    loadChildren: () => import('./details3/details3.module').then( m => m.Details3PageModule)
  },
  {
    path: 'routeg3',
    loadChildren: () => import('./routeg3/routeg3.module').then( m => m.Routeg3PageModule)
  },
  {
    path: 'details4',
    loadChildren: () => import('./details4/details4.module').then( m => m.Details4PageModule)
  },
  {
    path: 'routeg4',
    loadChildren: () => import('./routeg4/routeg4.module').then( m => m.Routeg4PageModule)
  },
  {
    path: 'details5',
    loadChildren: () => import('./details5/details5.module').then( m => m.Details5PageModule)
  },
  {
    path: 'routeg5',
    loadChildren: () => import('./routeg5/routeg5.module').then( m => m.Routeg5PageModule)
  },
  {
    path: 'details6',
    loadChildren: () => import('./details6/details6.module').then( m => m.Details6PageModule)
  },
  {
    path: 'routeg6',
    loadChildren: () => import('./routeg6/routeg6.module').then( m => m.Routeg6PageModule)
  },
  {
    path: 'details7',
    loadChildren: () => import('./details7/details7.module').then( m => m.Details7PageModule)
  },
  {
    path: 'routeg7',
    loadChildren: () => import('./routeg7/routeg7.module').then( m => m.Routeg7PageModule)
  },
  {
    path: 'details8',
    loadChildren: () => import('./details8/details8.module').then( m => m.Details8PageModule)
  },
  {
    path: 'routeg8',
    loadChildren: () => import('./routeg8/routeg8.module').then( m => m.Routeg8PageModule)
  },
  {
    path: 'details9',
    loadChildren: () => import('./details9/details9.module').then( m => m.Details9PageModule)
  },
  {
    path: 'routeg9',
    loadChildren: () => import('./routeg9/routeg9.module').then( m => m.Routeg9PageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'filter2',
    loadChildren: () => import('./filter2/filter2.module').then( m => m.Filter2PageModule)
  },
  {
    path: 'filter3',
    loadChildren: () => import('./filter3/filter3.module').then( m => m.Filter3PageModule)
  },
  {
    path: 'mercury',
    loadChildren: () => import('./mercury/mercury.module').then( m => m.MercuryPageModule)
  },
  {
    path: 'venus',
    loadChildren: () => import('./venus/venus.module').then( m => m.VenusPageModule)
  },
  {
    path: 'earth',
    loadChildren: () => import('./earth/earth.module').then( m => m.EarthPageModule)
  },
  {
    path: 'mars',
    loadChildren: () => import('./mars/mars.module').then( m => m.MarsPageModule)
  },
  {
    path: 'jupiter',
    loadChildren: () => import('./jupiter/jupiter.module').then( m => m.JupiterPageModule)
  },
  {
    path: 'saturn',
    loadChildren: () => import('./saturn/saturn.module').then( m => m.SaturnPageModule)
  },
  {
    path: 'uranus',
    loadChildren: () => import('./uranus/uranus.module').then( m => m.UranusPageModule)
  },
  {
    path: 'neptune',
    loadChildren: () => import('./neptune/neptune.module').then( m => m.NeptunePageModule)
  },
  {
    path: 'galaxy',
    loadChildren: () => import('./galaxy/galaxy.module').then( m => m.GalaxyPageModule)
  },
  {
    path: 'star',
    loadChildren: () => import('./star/star.module').then( m => m.StarPageModule)
  },
  {
    path: 'houses',
    loadChildren: () => import('./houses/houses.module').then( m => m.HousesPageModule)
  },
  {
    path: 'apartment',
    loadChildren: () => import('./apartment/apartment.module').then( m => m.ApartmentPageModule)
  },
  {
    path: 'bed-space',
    loadChildren: () => import('./bed-space/bed-space.module').then( m => m.BedSpacePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
