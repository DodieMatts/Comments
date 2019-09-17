import React from 'react';
import ReactDOM from 'react-dom';
import StoryBox from './App';
import Home from './Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoryBox />, div);
  ReactDOM.render(<Home />, document.getElementById("Home"));
  ReactDOM.unmountComponentAtNode(div);
});
