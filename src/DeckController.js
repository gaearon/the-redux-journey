import React, { Component } from 'react';
import Deck from './components/Deck';
import Slide from './components/Slide';
import getSlides from './slides';

export default class DeckController extends Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    switch (e.keyCode) {
    case 37:
      this.props.prevSlide();
      break;
    case 39:
      this.props.nextSlide();
      break;
    }
  }

  render() {
    return (
      <Deck {...this.props}>
        {this.renderSlides()}
      </Deck>
    );
  }

  renderSlides() {
    return getSlides().map((content, index) =>
      <Slide key={index}>{content}</Slide>
    );
  }
}
