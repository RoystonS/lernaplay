import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@ibmi2/primitive-controls';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(React.createElement(Button, null, 'Click me'), root);


