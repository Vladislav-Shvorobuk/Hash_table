import HashTable from '../index';

describe('tests for method hash', () => {
  test('instance has method hash', () => {
    const hashTable = new HashTable(5);
    expect(hashTable.hash).toBeInstanceOf(Function);
  });
  test('should generate proper hash for string keys', () => {
    const hashTable = new HashTable(5);

    expect(hashTable.hash('a')).toBe(2);
    expect(hashTable.hash('b')).toBe(3);
    expect(hashTable.hash('abc')).toBe(4);
  });
  test('should proper hash for number keys', () => {
    const hashTable = new HashTable(5);

    expect(hashTable.hash(0)).toBe(0);
    expect(hashTable.hash(8)).toBe(3);
    expect(hashTable.hash(10)).toBe(0);
  });
});
