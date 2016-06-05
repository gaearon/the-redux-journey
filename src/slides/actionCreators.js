import * as types from './actionTypes';

export function prevSlide() {
  return { type: types.PREV_SLIDE };
}

export function nextSlide() {
  return { type: types.NEXT_SLIDE };
}
