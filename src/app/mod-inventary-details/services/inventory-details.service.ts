import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InventaryDetailsModel} from '../model/Inventary-Details.model';
import {API_SERVER} from '../../../environments/environment';
import {NameModel} from '../../mod-core/models/name.model';
import {UserModel} from '../model/User.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryDetailsService {
  constructor(private httpClient: HttpClient) {
  }

  getInventoryDetails(): Promise<InventaryDetailsModel[]> {
    const url = `${API_SERVER}/inven/api/v1/search/inventarydetails`;
    return this.httpClient.get<InventaryDetailsModel[]>(url).toPromise();
  }

  getInventory(): Promise<NameModel[]> {
    const url = `${API_SERVER}/inven/api/v1/search/inventarydetails`;
    return this.httpClient.get<NameModel[]>(url).toPromise();
  }

  getSpartPart(): Promise<NameModel[]> {
    const url = `${API_SERVER}/inven/api/v1/search/spartparts`;
    return this.httpClient.get<NameModel[]>(url).toPromise();
  }

  createInventory(inventory: NameModel): Promise<any> {
    const url = `${API_SERVER}/tiphuma/api/v1/tipsHumanization`;
    return this.httpClient.post(url, inventory).toPromise();
  }

  creteInventoryDetails(inventortDetails: InventaryDetailsModel): Promise<any> {
    const url = `${API_SERVER}/tiphuma/api/v1/tipsHumanization`;
    return this.httpClient.post(url, inventortDetails).toPromise();
  }

  getUser(): Promise<UserModel[]> {
    const url = `${API_SERVER}/inven/api/v1/search/users`;
    return this.httpClient.get<UserModel[]>(url).toPromise();
  }
}
