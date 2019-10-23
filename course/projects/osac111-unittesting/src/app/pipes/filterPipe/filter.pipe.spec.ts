import { FilterPipe } from './filter.pipe';

describe('Filter-Pipe-Tests', () => {
  let filterPipe;
  const testCases: Array<[number, any[]]> = [
    [1, [{ name: 'Phil', age: 33 }]],
    [0, [{ name: 'Hans', age: 33 }]]
  ];

  beforeEach(() => {
    filterPipe = new FilterPipe();
  });

  it('creates an instance erfolgreich', () => {
    const myFirstPipe = new FilterPipe();
    expect(myFirstPipe).toBeTruthy();
  });

  it('should filter correctly', () => {
    // Arrange
    const items = [];

    items.push({ id: 1, name: 'Phil' });
    items.push({ id: 2, name: 'Chester' });
    items.push({ id: 3, name: 'Mike' });
    items.push({ id: 4, name: 'Genesis' });

    // Act
    const result = filterPipe.transform(items, 'name', 'Phil');

    // Assert
    expect(result).toEqual([{ id: 1, name: 'Phil' }]);
    expect(result.length).toBe(1);
    expect(result.length).toBeGreaterThan(0);
  });

  it('should filter correctly with two items', () => {
    // Arrange
    const items = [];

    items.push({ id: 1, name: 'Phil' });
    items.push({ id: 1, name: 'Phil' });
    items.push({ id: 2, name: 'Chester' });
    items.push({ id: 3, name: 'Mike' });
    items.push({ id: 4, name: 'Genesis' });

    // Act
    const result = filterPipe.transform(items, 'name', 'Phil');

    // Assert
    expect(result.length).toBe(2);
    expect(result.length).toBeGreaterThan(0);
  });

  it('should filter correctly (camel case)', () => {
    // Arrange
    const items = [];

    items.push({ id: 1, name: 'Phil' });
    items.push({ id: 2, name: 'Chester' });
    items.push({ id: 3, name: 'Mike' });
    items.push({ id: 4, name: 'Genesis' });

    // Act
    const result = filterPipe.transform(items, 'name', 'phil');

    // Assert
    expect(result).toEqual([{ id: 1, name: 'Phil' }]);
    expect(result.length).toBe(1);
    expect(result.length).toBeGreaterThan(0);
  });

  testCases.forEach(([expectedLength, input]) => {
    it(`filters names as expected when expecting ${expectedLength}`, () => {
      const filtered = filterPipe.transform(input, 'name', 'phil');
      expect(filtered.length).toEqual(expectedLength);
    });
  });
});
