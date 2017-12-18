import {InMemoryDbService} from 'angular-in-memory-web-api/interfaces';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const clients = [
      { id: 0,  name: 'Zero', surname: 'zerosurname' },
      { id: 11, name: 'Mr. Nice', surname: 'zerosurname' },
      { id: 12, name: 'Narco', surname: 'zerosurname' },
      { id: 13, name: 'Bombasto', surname: 'zerosurname' },
      { id: 14, name: 'Celeritas', surname: 'zerosurname' },
      { id: 15, name: 'Magneta', surname: 'zerosurname' },
      { id: 16, name: 'asdasd', surname: 'zerosurname' },
      { id: 17, name: 'Dynama', surname: 'zerosurname' },
      { id: 18, name: 'Dr IQ', surname: 'zerosurname' },
      { id: 19, name: 'Magma', surname: 'zerosurname' },
      { id: 20, name: 'Tornado', surname: 'zerosurname' }
    ];
    return {clients};
  }
}
