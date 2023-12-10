class DurationProperty extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "duration-property", DurationProperty);
    }
  }

  connectedCallback() {
    this.duration = this.player.duration;
    this.player.addEventListener(
      "durationchange",
      () => (this.duration = this.player.duration)
    );
  }

  set duration(duration) {
    this.style.setProperty("--duration", duration);
  }

  get player() {
    return this.querySelector("audio, video");
  }
}

DurationProperty.register();
