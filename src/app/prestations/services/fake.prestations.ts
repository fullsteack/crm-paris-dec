import { Prestation } from 'src/app/shared/models/prestation';

export const fakePrestations: Prestation[] = [
  new Prestation({
    id: 'sgf',
    typePresta: 'Formation',
    client: 'Modis',
    nbJours: 10,
    comment: 'Un groupe super bien'
  }),
  new Prestation({
    id: 'dfh',
    typePresta: 'Coaching',
    client: 'Nemesys',
    nbJours: 20,
    comment: '2eme commentaire tres interessant'
  }),
];
