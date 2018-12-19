import { StateClient } from '../enums/client.enum';

export interface ClientI {
  id: string;
  nom: string;
  email: string;
  state: StateClient;
}
