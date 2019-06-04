import React from 'react';
import ReactDOM from 'react-dom';
import StoryBox from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoryBox />,<FirstPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
