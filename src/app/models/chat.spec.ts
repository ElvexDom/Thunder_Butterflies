import { Chat } from './chat';

describe('Chat', () => {
  it('should create an instance', () => {
    // Vérifie si une instance de Chat peut être créée avec le nom "Felix"
    expect(new Chat("Felix")).toBeTruthy();
  });

  it('test recuperation nom de chat', () => {
    // Vérifie si le nom du chat créé correspond au nom "Felix"
    const catName = "Felix";
    const myCat = new Chat(catName);
    expect(myCat.name).toBe(catName);
  });

});