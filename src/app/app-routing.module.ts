import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './components/main-layout/footer/footer.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ForumListPageComponent } from './pages/forum-list-page/forum-list-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { ForumPageComponent } from './pages/forum-page/forum-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    children: [
      {
        path: "",
        redirectTo: "blogs",
        pathMatch: "full" 
      },
      {
        path: "blogs",
        component: BlogPageComponent
      },
      {
        path: "forums",
        component: ForumListPageComponent
      },
      {
        path: "post",
        component: PostPageComponent
      },
      {
        path: "forum",
        component: ForumPageComponent
      }
    ]
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "register",
    component: RegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
