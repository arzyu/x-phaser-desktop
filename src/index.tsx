import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "@app/App";
import styles from "./index.module.css";

const root = document.querySelector(".root")!;

root.classList.replace("root", styles["root"]);

ReactDOM.createRoot(root).render(
  <App />
);
