import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebstorageModule} from 'ngx-webstorage';
// import { MatIconModule, MatRippleModule,MatSidenavModule,MatMenuModule,MatBadgeModule,MatAutocompleteModule
//  ,MatSnackBarModule,MatRadioModule} from '@angular/material';//'@angular/material';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatBadgeModule} from '@angular/material/badge';
import { MatSelectModule} from '@angular/material/select';
import { MatListModule} from '@angular/material/list';
import { MatSidenavModule,} from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatTabsModule} from '@angular/material/tabs';
import { MatInputModule} from '@angular/material/input';
import { MatRippleModule} from '@angular/material/core';
import { SerchFilterPipe } from './Filter/serch-filter.pipe';
import { UserComponent } from '../app/pages/user/user.component';
import { FooterComponent } from './pages/footer/footer.component';
import { InputTextModule } from 'primeng/inputtext';
import { LoginapiService } from './service/loginapi.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './pages/header/header.component';
import { UnReviewedComponent } from './pages/transactions/un-reviewed/un-reviewed.component';
import { ReviewedComponent } from './pages/transactions/reviewed/reviewed.component';
import { RolesComponent } from './pages/Config/roles/roles.component';
import { PlazaComponent } from './pages/Config/plaza/plaza.component';
import { LaneComponent } from './pages/Config/lane/lane.component';


//import { from } from 'rxjs';
//Primengtable
import { TableModule } from 'primeng/table';
import { AddUpdateLaneComponent } from './pages/Config/add-update-lane/add-update-lane.component';
import { HardwareComponent } from './pages/Config/hardware/hardware.component';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';



//import {MatAutocompleteModule} from '@angular/material/autocomplete';
@NgModule({
  declarations: [
    SerchFilterPipe,
    AppComponent,
    LoginComponent,
    UserComponent,
    FooterComponent,
    DashboardComponent,
    HeaderComponent,
    UnReviewedComponent,
    ReviewedComponent,
    RolesComponent,
    PlazaComponent,
    LaneComponent,
    AddUpdateLaneComponent,
    HardwareComponent,
  ],
  imports: [
    NgxWebstorageModule.forRoot(),
    NgxWebstorageModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    TableModule,

    MatIconModule, 
    MatSidenavModule,  
    MatMenuModule, 
    MatRippleModule,
    //MatAutocompleteModule,
    MatBadgeModule,  
    MatButtonModule,    
    MatCardModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTabsModule,  
    MatSelectModule,
    MatListModule,  
    MatTooltipModule,
    MatToolbarModule,
    //MatRadioModule,
    //MatSnackBarModule,
    //MatTableModule,  
    //MatPaginatorModule,   
    //MatSortModule,  
    //MatDialogModule,  
    //MatTreeModule,  
    //MatProgressSpinnerModule,  
    //MatGridListModule,  
    //MatCheckboxModule,  
    //MatStepperModule, 
    //MatDatepickerModule,
    //NativeDateModule,        
    //MatNativeDateModule,
    //MatFileUploadModule
  ],
  providers: [LoginapiService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
