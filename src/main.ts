import { Engine, Loader, DisplayMode } from "excalibur";
import { Player } from "./player";
import { Resources } from "./resources";

class Game extends Engine {
    constructor() {
      super({ width: 800, height: 600, displayMode: DisplayMode.FillScreen });
    }
    initialize() {
      
      const player = new Player();
      this.add(player);

      const loader = new Loader([Resources.Sword]);
      this.start(loader);
    }
  }
  
  export const game = new Game();
  game.initialize();