import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { AuthGardCls } from './auth.guard';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'News', component: NewsPageComponent },
	{ path: 'About', canActivate:[AuthGardCls], component: AboutPageComponent },
	{ path: 'Contact', canActivate:[AuthGardCls], component: ContactPageComponent},
    {path: 'User/:NamVak/mobile/:MblVak', component: UserPageComponent}
];
