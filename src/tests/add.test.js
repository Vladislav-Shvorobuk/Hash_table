import HashTable from '../index';

describe('tests for method add', () => {

  test('instance has method add', () => {
    const hashTable = new HashTable(5);
    expect(hashTable.add).toBeInstanceOf(Function);
  });

  test('hashtable length shouldn\'t mutate after using method \'add\'', () => {
    const hashTable = new HashTable(3);
    
    hashTable.add('Charlie', 'Chaplin');
    hashTable.add('Bob', 'Grahovsky');
    hashTable.add('Charlie', 'Chaplin');

    expect(hashTable.table.length).toBe(3);
  });

  test('method \'add\' must add element to the hashTable', () => {
    const hashTable = new HashTable(1);
    
    hashTable.add('Ann', 'Blur');

    expect(hashTable.table[0]).toEqual({ key:'Ann', value: 'Blur'});
  });

});