import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainUiComponent } from './main-ui/main-ui.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from '../data/entity-metadata';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000'// request timeout
}


@NgModule({
  providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }],
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
  ],
  declarations: [
    MainUiComponent
  ],
  exports: [
    MainUiComponent
  ]
})
export class HomepageModule { }

