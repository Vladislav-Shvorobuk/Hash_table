import HashTable from '../index';

describe('tests for method remove', () => {
    test('instance has method remove', () => {
        const hashTable = new HashTable(5);
        expect(hashTable.remove).toBeInstanceOf(Function);
      });
});