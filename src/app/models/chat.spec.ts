import { Chat } from './chat';

describe('Chat', () => {
  it('should create an instance', () => {
    expect(new Chat("Felix")).toBeTruthy();
  });

  it('test recuperation nom de chat', () => {
    const catName = "Felix";
    const myCat = new Chat(catName);
    expect(myCat.name).toBe(catName);
  });

});