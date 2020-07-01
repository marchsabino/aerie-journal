import { PrivilegePipe } from './privilege.pipe';

describe('PrivilegePipe', () => {
  it('create an instance', () => {
    const pipe = new PrivilegePipe();
    expect(pipe).toBeTruthy();
  });
});
