import {Component, OnInit} from '@angular/core';
import {InventaryDetailsModel} from '../../model/Inventary-Details.model';
import {InventoryDetailsService} from '../../services/inventory-details.service';
import {NameModel} from '../../../mod-core/models/name.model';

@Component({
  selector: 'app-inventary-details-management-list',
  templateUrl: './inventary-details-management-list.component.html',
  styleUrls: ['./inventary-details-management-list.component.scss']
})
export class InventaryDetailsManagementListComponent implements OnInit {
  inventaryDetailsModel: InventaryDetailsModel[] = [];
  inventaryModel: NameModel[] = [];

  temp: any;

  constructor(private inventoryDetailsService: InventoryDetailsService) {
  }

  ngOnInit(): void {
    this.inventoryDetailsService.getInventoryDetails().then(data => this.inventaryDetailsModel = data);
    this.temp = this.inventoryDetailsService.getInventory().then(data => this.inventaryModel = data);

    console.log(this.temp);
  }

}
