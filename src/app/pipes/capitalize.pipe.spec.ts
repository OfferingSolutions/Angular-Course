import {CapitalizePipe} from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return value with first character capitalized', () => {
    // arrange
    const value = 'my lowercase value';
    const expectedValue = 'My lowercase value';

    const pipe = new CapitalizePipe();

    // act
    const result = pipe.transform(value);

    // assert
    expect(result).toEqual(expectedValue)
  })
});
