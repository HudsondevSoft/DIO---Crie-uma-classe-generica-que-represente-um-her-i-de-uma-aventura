// Definindo a classe Heroi
class Heroi {
    // Construtor da classe
    constructor(nome, idade, tipo) {
      this.nome = nome;     // Nome do herói
      this.idade = idade;   // Idade do herói
      this.tipo = tipo;     // Tipo do herói (ex: guerreiro, mago, monge, ninja)
    }
  
    // Método atacar
    atacar() {
      let ataque;
      
      // Determinando o tipo de ataque baseado no tipo do herói
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
      }
  
      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplos de criação de heróis e uso do método atacar
  
  const mago = new Heroi('Gandalf', 300, 'mago');
  mago.atacar();  // Saída esperada: "O mago atacou usando magia"
  
  const guerreiro = new Heroi('Aragorn', 35, 'guerreiro');
  guerreiro.atacar();  // Saída esperada: "O guerreiro atacou usando espada"
  
  const monge = new Heroi('Shaolin', 50, 'monge');
  monge.atacar();  // Saída esperada: "O monge atacou usando artes marciais"
  
  const ninja = new Heroi('Kage', 25, 'ninja');
  ninja.atacar();  // Saída esperada: "O ninja atacou usando shuriken"