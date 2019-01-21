import HashTable from '../index';

describe('tests for method remove', () => {
  test('instance has method remove', () => {
    const hashTable = new HashTable(5);
    expect(hashTable.remove).toBeInstanceOf(Function);
  });
  test('should delete elements correctly', () => {
    const hashTable = new HashTable(1);

    hashTable.add('a', 'sky-old');
    hashTable.add('b', 'sun');
    hashTable.remove('a');

    expect(hashTable.table[0]).toBeUndefined();
    expect(hashTable.table[1]).toEqual({ key: 'b', value: 'sun' });
  });
});