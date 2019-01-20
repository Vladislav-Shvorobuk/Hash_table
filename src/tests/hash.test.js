import HashTable from '../index';

describe('tests for method hash', () => {
    test('instance has method hash', () => {
        const hashTable = new HashTable(5);
        expect(hashTable.hash).toBeInstanceOf(Function);
      });
});