import HashTable from '../index';

describe('tests for method add', () => {
    test('instance has method add', () => {
        const hashTable = new HashTable(5);
        expect(hashTable.add).toBeInstanceOf(Function);
      });
});