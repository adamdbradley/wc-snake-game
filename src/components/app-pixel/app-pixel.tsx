import { Component, h, Prop } from "@stencil/core";
import { IPixelTypes } from "../model";

@Component({
  tag: "app-pixel",
  styleUrls: ["app-pixel.scss"],
  shadow: true
})
export class AppPixel {
  @Prop() type: IPixelTypes;
  componentWillLoad() {
    console.log('app-pixel componentWillLoad');
  }
  componentDidLoad() {
    console.log('app-pixel componentDidLoad');
  }
  render() {
    console.log('app-pixel render');
    return <div class={`type-${this.type}`}></div>;
  }
}
