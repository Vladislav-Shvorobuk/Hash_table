import HashTable from '../index';

describe('tests for constructor', () => {
  
  test('should has a constructor in HashTable ', () => {
    expect(HashTable.prototype.constructor).toBe(HashTable);
  });

  test('should create hashtable of certain length', () => {
    const hashTable = new HashTable(5);
    expect(hashTable.table.length).toBe(5);

    const hashTable_2 = new HashTable(20);
    expect(hashTable_2.table.length).toBe(20);
  });

  // test('without argument \'length\' should create an empty hashtable', () => {
  //   const hashTable = new HashTable();
  //   expect(hashTable.table.length).toBe(0);
  // });

});