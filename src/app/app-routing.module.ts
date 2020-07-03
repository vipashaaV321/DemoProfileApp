import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { ListaccComponent } from './listacc/listacc.component';
import { EditaccComponent } from './editacc/editacc.component';
import { BusinessComponent } from './business/business.component';


const routes: Routes = [{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'header',component:HeaderComponent},
{path:'listacc',component:ListaccComponent},
{path:'editacc/:sid',component:EditaccComponent},
{path:'profile/:sid',component:ProfileComponent},
{path:'profile/{}',component:ProfileComponent},
{path:'business/:sid',component:BusinessComponent},
{path:'details',component:DetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
