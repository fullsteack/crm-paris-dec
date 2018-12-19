import { Client } from 'src/app/shared/models/client';

export const fakeClients: Client[] = [
  new Client({
    id: 'mlkj',
    nom: 'Formation',
    email: 'toto@modis.fr',
  }),
  new Client({
    id: 'dfh',
    nom: 'Coaching',
    email: 'tonton@nemesys.com',
  }),
];
