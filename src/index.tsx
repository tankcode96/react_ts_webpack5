import React from "react";
// 设置useBuiltIns为usage时，不需要引入以下内容
import "core-js";
import "regenerator-runtime/runtime";
import { createRoot } from "react-dom/client";
import App from "./App";

console.log("NODE_ENV", process.env.NODE_ENV);
console.log("BASE_ENV", process.env.BASE_ENV);

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}
