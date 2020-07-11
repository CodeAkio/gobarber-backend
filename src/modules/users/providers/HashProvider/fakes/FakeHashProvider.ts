import IHashProvider from '../models/IHashProvider';

class FakeHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return payload;
  }

  public compareHash(payload: string, hashed: string): Promise<boolean> {
    return new Promise(resolve => resolve(payload === hashed));
  }
}

export default FakeHashProvider;
