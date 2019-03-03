import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ReviewComponent } from './review/review.component';
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from './table/table.component'
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { ReviewFormComponent } from './review-form/review-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material";
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSortModule } from '@angular/material';
import { FilterComponent } from './filter/filter.component';
import { BurritoListPageComponent } from './burrito-list-page/burrito-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReviewComponent,
    TableComponent,
    ReviewFormComponent,
    FilterComponent,
    BurritoListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase_config),
    AngularFirestoreModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatSortModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSliderModule,
    FormsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
