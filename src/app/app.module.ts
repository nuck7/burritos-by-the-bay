import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatCardModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatGridListModule, MatSortModule, MatSnackBarModule, MatInputModule, MatCheckboxModule, MatSliderModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,  MatTabsModule, MatTableModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReviewComponent } from './review/review.component';
import { TableComponent } from './table/table.component'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { ReviewFormComponent } from './review-form/review-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    MatGridListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
