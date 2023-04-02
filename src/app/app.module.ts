import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main-layout/header/header.component';
import { FooterComponent } from './components/main-layout/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LogoComponent } from './components/header-layout/logo/logo.component';
import { SearchbarComponent } from './components/header-layout/searchbar/searchbar.component';
import { NavgroupComponent } from './components/header-layout/navgroup/navgroup.component';
import { ProfilenavComponent } from './components/header-layout/profilenav/profilenav.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { BodyComponent } from './components/main-layout/body/body.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { ForumPageComponent } from './pages/forum-page/forum-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ForumListPageComponent } from './pages/forum-list-page/forum-list-page.component';
import { BriefPostComponent } from './components/post-layout/brief-post/brief-post.component';
import { BriefForumComponent } from './components/forum-layout/brief-forum/brief-forum.component';
import { AuthorComponent } from './components/utility/author/author.component';
import { FollowerCountComponent } from './components/utility/follower-count/follower-count.component';
import { TitleComponent } from './components/utility/title/title.component';
import { BriefContentComponent } from './components/utility/brief-content/brief-content.component';
import { TagComponent } from './components/utility/tag/tag.component';
import { PostDateComponent } from './components/utility/post-date/post-date.component';
import { UpdateDateComponent } from './components/utility/update-date/update-date.component';
import { BriefPostContentComponent } from './components/post-layout/brief-post-content/brief-post-content.component';
import { AuthorNameComponent } from './components/utility/author-name/author-name.component';
import { AuthorImageComponent } from './components/utility/author-image/author-image.component';
import { BriefPostHeadComponent } from './components/post-layout/brief-post-head/brief-post-head.component';
import { BriefPostFootComponent } from './components/post-layout/brief-post-foot/brief-post-foot.component';
import { ResizeButtonComponent } from './components/utility/resize-button/resize-button.component';
import { ChangeBackgroundButtonComponent } from './components/utility/change-background-button/change-background-button.component';
import { TagGroupComponent } from './components/utility/tag-group/tag-group.component';
import { EstimateReadComponent } from './components/utility/estimate-read/estimate-read.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    LogoComponent,
    SearchbarComponent,
    NavgroupComponent,
    ProfilenavComponent,
    LoginPageComponent,
    RegisterPageComponent,
    BodyComponent,
    PostPageComponent,
    ForumPageComponent,
    BlogPageComponent,
    ForumListPageComponent,
    BriefPostComponent,
    BriefForumComponent,
    AuthorComponent,
    FollowerCountComponent,
    TitleComponent,
    BriefContentComponent,
    TagComponent,
    PostDateComponent,
    UpdateDateComponent,
    BriefPostContentComponent,
    AuthorImageComponent,
    AuthorNameComponent,
    BriefPostHeadComponent,
    BriefPostFootComponent,
    ResizeButtonComponent,
    ChangeBackgroundButtonComponent,
    TagGroupComponent,
    EstimateReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
