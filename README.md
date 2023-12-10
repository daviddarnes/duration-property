# `duration-property`

A Web Component to surface an audio or video's duration as a CSS Custom Property.

**[Demo](https://daviddarnes.github.io/duration-property/demo.html)**

## Examples

```html
<script type="module" src="duration-property.js"></script>

<duration-property>
  <audio controls src="https://darn.es/sounds/daviddarnes.m4a"></audio>
</duration-property>
```

## Features

This Web Component allows you to:

- Surface the duration of an audio or video elements source duration as a CSS Custom Property (`--duration`)
- Update the `--duration` custom property if the durarion of the source changes

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@daviddarnes/duration-property): `npm install @daviddarnes/duration-property`
1. [Download the source manually from GitHub](https://github.com/daviddarnes/duration-property/releases) into your project.
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

### Usage

Make sure you include the `<script>` in your project (choose one of these):

```html
<!-- Host yourself -->
<script type="module" src="duration-property.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script type="module" src="https://www.unpkg.com/@daviddarnes/duration-property@1.0.0/duration-property.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script type="module" src="https://esm.sh/@daviddarnes/duration-property@1.0.0"></script>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/component-template)
