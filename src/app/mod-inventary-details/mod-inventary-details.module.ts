import {NgModule} from '@angular/core';

import {ModInventaryDetailsRoutingModule} from './mod-inventary-details-routing.module';
import {InventaryDetailsManagementListComponent} from './components/inventary-details-management-list/inventary-details-management-list.component';
import {ModCoreModule} from '../mod-core/mod-core.module';
import {InventaryDetailsManagementComponent} from './components/inventary-details-management/inventary-details-management.component';
import {FormsModule} from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';


@NgModule({
  declarations: [
    InventaryDetailsManagementListComponent,
    InventaryDetailsManagementComponent,
    InventaryDetailsManagementComponent
  ],
  imports: [
    ModInventaryDetailsRoutingModule,
    ModCoreModule,
    FormsModule,
    MultiSelectModule
  ]
})
export class ModInventaryDetailsModule {
}
