export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const friends = [
        { id: 101, name: 'Anil' },
        { id: 102, name: 'Gopal' },
        { id: 103, name: 'Pramod' },
        { id: 104, name: 'Narendra' },
        { id: 105, name: 'Prakash' },
        { id: 106, name: 'Vinod' },
        { id: 107, name: 'Rahul' },
        { id: 108, name: 'Himanshu' }
    ];
    return { heroes, friends };
  }
}
