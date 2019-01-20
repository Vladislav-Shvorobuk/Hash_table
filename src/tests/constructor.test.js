import HashTable from '../index';

test('should has a constructor in HashTable ', () => {
    const hashTable = new HashTable(5);
    expect(HashTable.prototype.constructor).toBe(HashTable);
  });