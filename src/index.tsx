import { h, render } from "preact";
import "./index.css";

const App = () => <p class="app-title">Built by ESBuild!</p>;

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.body);
});
