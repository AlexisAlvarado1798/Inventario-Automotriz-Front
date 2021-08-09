import {NameModel} from '../../mod-core/models/name.model';

export class InventaryDetailsModel {
  detId?: any;
  invId?: any;
  spaId?: any;
  autId?: any;
  detStock?: any;
  detInitialStock?: any;
  detPrice?: any;

  inventory?: NameModel[];
  spareParts?: NameModel[];

}
