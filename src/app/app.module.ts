import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListaccComponent } from './listacc/listacc.component';
import { EditaccComponent } from './editacc/editacc.component';
import { BusinessComponent } from './business/business.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { AnQrcodeModule } from 'an-qrcode';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputSwitchModule, InputSwitch} from 'primeng/inputswitch';
import {FieldsetModule} from 'primeng/fieldset';
import { BnNgIdleService } from 'bn-ng-idle'; // import bn-ng-idle service
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    DetailsComponent,
    HeaderComponent,
    ListaccComponent,
    EditaccComponent,
    BusinessComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxQRCodeModule,
    AnQrcodeModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    MultiSelectModule,
    FieldsetModule,
    InputSwitchModule
    
    
  ],
  providers: [BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
