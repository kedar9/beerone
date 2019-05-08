import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';
import LOGO from './static/react.png';

const Index = () => {
  return (
    <div>
      <img src={LOGO} width="30" height="30" />
      Welcome to React!
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('app'));
