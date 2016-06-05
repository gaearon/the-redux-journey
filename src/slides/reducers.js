import { combineReducers } from 'redux';
import { NEXT_SLIDE, PREV_SLIDE } from './actionTypes';
import getSlides from '../slides/index';

const slideCount = getSlides().length;

function currentSlide(state = 0, action) {
  switch (action.type) {
  case NEXT_SLIDE:
    return Math.min(slideCount - 1, state + 1);
  case PREV_SLIDE:
    return Math.max(0, state - 1);
  default:
    return state;
  }
}

export default combineReducers({
  currentSlide
});