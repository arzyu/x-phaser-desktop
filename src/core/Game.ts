import Phaser, { Types } from "phaser";

import { MainScene } from "./scenes/MainScene";

export class Game extends Phaser.Game {
  constructor(parent: HTMLDivElement) {
    const aspectRatio = parent.offsetHeight / parent.offsetWidth;
    const size = {
      width: 1000,
      height: 1000 * aspectRatio
    };

    const config: Types.Core.GameConfig = {
      scale: {
        mode: Phaser.Scale.FIT,
        ...size
      },
      scene: new MainScene(),
      backgroundColor: "#303030",
      disableContextMenu: true,
      banner: false,
      ...size
    };

    super({ ...config, parent });
  }
}
