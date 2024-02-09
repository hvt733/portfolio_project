import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components//shared/header/header.component';
import { FooterComponent } from './components//shared/footer/footer.component';
import { MainLayoutComponent } from './components/shared/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SubProjectsComponent } from './components/sub-projects/sub-projects.component';

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
        path: 'projects',
        component: ProjectsComponent,
        title: 'Projects'
      },
      {
        path: 'about',
        component: AboutComponent,
        title: 'About Us'
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact with us'
      },
      {
        path: 'sub-projects',
        component: SubProjectsComponent,
        title: 'Sub Projects'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
