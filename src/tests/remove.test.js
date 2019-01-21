import HashTable from '../index';

describe('tests for method remove', () => {
  test('instance has method remove', () => {
    const hashTable = new HashTable(5);
    expect(hashTable.remove).toBeInstanceOf(Function);
  });
  test('should track actual keys', () => {
    const hashTable = new HashTable(1);

    hashTable.add('a', 'sky-old');
    hashTable.remove('a');

    expect(hashTable.table[0]).toBeUndefined();
  });
});