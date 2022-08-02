import { CustomLowerCasePipe } from './custom-lower-case.pipe';

describe('CustomLowerCasePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomLowerCasePipe();
    expect(pipe).toBeTruthy();
  });
});
