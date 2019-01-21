import HashTable from '../index';

describe('tests for method find', () => {
  test('instance has method find', () => {
    const hashTable = new HashTable(5);
    expect(hashTable.add).toBeInstanceOf(Function);
  });
});