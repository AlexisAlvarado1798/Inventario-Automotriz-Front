import {Component, OnInit} from '@angular/core';
import {InventoryDetailsService} from '../../services/inventory-details.service';
import {NameModel} from '../../../mod-core/models/name.model';
import {InventaryDetailsModel} from '../../model/Inventary-Details.model';
import {UserModel} from '../../model/User.model';

@Component({
  selector: 'app-inventary-details-management',
  templateUrl: './inventary-details-management.component.html',
  styleUrls: ['./inventary-details-management.component.scss']
})
export class InventaryDetailsManagementComponent implements OnInit {
  spartPartsModel: NameModel[] = [];
  inventory = <NameModel>{};
  userModel: UserModel[] = [];

  inventortDetails = <InventaryDetailsModel>{};

  checked: boolean = false;

  msg: any;

  minDate?: Date;
  maxDate?: Date;

  constructor(private inventoryDetailsService: InventoryDetailsService) {
  }

  ngOnInit(): void {
    this.inventoryDetailsService.getSpartPart().then(data => this.spartPartsModel = data);
    this.inventoryDetailsService.getUser().then(data => this.userModel = data);
    ;
  }

  async onClickSave(): Promise<void> {
    this.valid(this.inventory, this.inventortDetails);
    await this.inventoryDetailsService.createInventory(this.inventory);
    await this.inventoryDetailsService.creteInventoryDetails(this.inventortDetails);

  }

  private valid(invetory: NameModel, inventoryDetails: InventaryDetailsModel) {
    if (invetory.code == null || invetory.description == null || inventoryDetails.detStock == null || inventoryDetails.detInitialStock) {
      this.msg = "Todos los Campos del formualrios Obligatorios"
    }

  }
}
