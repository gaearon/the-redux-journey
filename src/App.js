import React from 'react';
import DeckController from './DeckController';
import { connect } from 'react-redux';
import * as actionCreators from './slides/actionCreators';
import './normalize.less';
import './index.less';

export default connect(
  state => state,
  actionCreators
)(DeckController);
