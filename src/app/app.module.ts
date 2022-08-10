import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import{MatCardModule} from '@angular/material/card';
import{MatDialogModule} from '@angular/material/dialog';
import{MatInputModule} from '@angular/material/input';
import{MatTableModule} from '@angular/material/table';
import{MatMenuModule} from '@angular/material/menu';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CatalogueComponent } from './component/catalogue/catalogue.component';
import { ReviewComponent } from './component/review/review.component';
import { EditComponent } from './component/edit/edit.component';
import { EditreviewComponent } from './component/editreview/editreview.component';

//import {
  //MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  //MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
//} from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    CatalogueComponent,
    ReviewComponent,
    EditComponent,
    EditreviewComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    AppRoutingModule,
  
    

  
    
    




    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
