
import { ClientI } from '../interfaces/client-i';
import { StateClient } from '../enums/client.enum';

export class Client implements ClientI {
  nom: string;
  name: string;
  id: string;
  email: string;
  state = StateClient.ACTIF;

  constructor(fields?: Partial<Client>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

}
