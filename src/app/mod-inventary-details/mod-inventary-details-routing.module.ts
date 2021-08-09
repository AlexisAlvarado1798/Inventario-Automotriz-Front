import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InventaryDetailsManagementListComponent} from './components/inventary-details-management-list/inventary-details-management-list.component';
import {InventaryDetailsManagementComponent} from './components/inventary-details-management/inventary-details-management.component';

const routes: Routes = [{
  path: 'inventarydetails', component: InventaryDetailsManagementListComponent
},
  {
    path: 'inventaryCreate', component: InventaryDetailsManagementComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModInventaryDetailsRoutingModule {
}
