import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {FieldsetModule} from 'primeng/fieldset';
import {CheckboxModule} from 'primeng/checkbox';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MatCardModule,
    TableModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    FieldsetModule,
    CheckboxModule,
    MatDividerModule
  ],
  exports: [
    MatCardModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    FieldsetModule,
    CheckboxModule,
    MatDividerModule
  ]
})
export class ModCoreModule {
}
