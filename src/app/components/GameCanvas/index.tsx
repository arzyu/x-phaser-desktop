import { useLayoutEffect, useRef, useState } from "react";

import { Game } from "@core/Game";
import styles from "./GameCanvas.module.css";

export const GameCanvas = () => {
  const [game, setGame] = useState<Game | null>(null);
  const container = useRef(null);

  useLayoutEffect(() => {
    if (!game) {
      setGame(new Game(container.current!));
    }
  }, [game]);

  return (
    <div className={styles["canvas-root"]} ref={container}></div>
  );
};
