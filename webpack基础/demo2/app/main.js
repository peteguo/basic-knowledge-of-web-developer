//main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './mian.css';//使用require导入css文件


var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());
