import { Polygon } from "./polygon.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.moveX = 0;
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener("resize", this.resize.bind(this), false);
    document.addEventListener("pointerdown", this.onDown.bind(this));
    document.addEventListener("pointermove", this.onMove.bind(this), false);
    document.addEventListener("pointerup", this.onUp.bind(this), false);
    this.resize();
    this.animate();
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
    this.polygon = new Polygon(
      this.stageWidth / 2,
      this.stageHeight + this.stageHeight / 4,
      this.stageHeight / 1.5,
      15
    );
    this.animate();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.moveX *= 0.92;
    this.polygon.animate(this.ctx, this.moveX);
  }

  onDown(e) {
    this.isDown = true;
    this.moveX = 0;
    this.offset = e.clientX;
    this.animate();
  }
  onMove(e) {
    if (this.isDown) {
      this.moveX = e.clientX - this.offsetX;
      this.offsetX = e.clientX;
      console.log(e.clientX, this.offset);
      this.animate();
    }
  }
  onUp(e) {
    this.isDown = false;
  }
}

window.onload = () => {
  const app = new App();
};
