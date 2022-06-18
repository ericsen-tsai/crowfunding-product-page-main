# Crowfunding Product Page

## Table of contents

- [Crowfunding Product Page](#crowfunding-product-page)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [Process](#process)
    - [Built with](#built-with)
    - [Note](#note)
      - [Custom Radio Button](#custom-radio-button)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### Screenshot

![Preview](./design/desktop-preview.jpg)

### Links

- [Netlify](https://62acbabb303a9800b8054885--effulgent-mousse-58fede.netlify.app/)

## Process

### Built with

- Sass
- React
- Redux Toolkit

### Note

#### Custom Radio Button

```scss
.radio-input {
  display: none;
}

// create outside concentric circle of button
.radio-button {
  height: 1.5rem;
  width: 1.5rem;
  border: 2px solid $clr-neutral-2;
  border-radius: 50%;
  display: inline-block;
  position: relative;

  // use pseudo element to create the dot inside button
  &::after {
    content: "";
    display: block;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $clr-primary-1;
    opacity: 0;
    transition: opacity 0.3s;
  }
}

// if invisible radio button is checked, the after element will show up.
.radio-input:checked ~ .radio-label .radio-button::after {
  opacity: 1;
}
```

### Continued development

- [ ] Use createPortal to handle popup section.
- [ ] Use Framer to add animation.

## Author

- GitHub - [Ericsen Tsai](https://github.com/ericsen-tsai)
