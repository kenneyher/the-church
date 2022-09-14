import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
import loadAll from "./loader.js";

// const WIDTH = window.widt;
// const height = window.height();

kaboom({
  width: window.innerWidth,
  height: window.innerHeight,
  crisp: true,
  canvas: document.getElementById('kaboom'),
  global: true,
  background: [0, 0, 0]
})

loadAll();

const Game = {
  map:
  {
    opts: 
    {
      width: 12, 
      height: 12,
      "1": () => [
        sprite('wcort'),
        area(),
        layer('bound'),
      ],
      "-": () => [
        sprite('wallh'),
        area(),
        layer('env'),
      ],
      "|": () => [
        sprite('wallv'),
        area(),
        layer('env'),
      ],
      "2": () => [
        sprite('wcortr'),
        area(),
        layer('env'),
      ],
      "3": () => [
        sprite('wcorbr'),
        area(),
        layer('env'),
      ],
      "4": () => [
        sprite('wcorb'),
        area(),
        layer('env'),
      ],
    }
  }
}

scene('play', () => {
  const map = addLevel([
    "1-------------2",
    "|             |",
    "|             |",
    "|             |",
    "|             |",
    "|             |",
    "|             |",
    "4-------|-----3",
  ], Game.map.opts)
})

go('play');
focus()