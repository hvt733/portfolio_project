import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components//shared/header/header.component';
import { FooterComponent } from './components//shared/footer/footer.component';
import { MainLayoutComponent } from './components/shared/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Home'
      },
      {
        path: '',
        component: HeaderComponent,
        title: 'Header'
      },
      {
        path: '',
        component: FooterComponent,
        title: 'Footer'
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Projects'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
