import React,{Component} from 'react';
let config = require('./config.json');
import styles from './Greeter.css';//导入

module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = config.greetText;
  return greet;
};

class Greeter extends Component{
  render(){
    return (
      <div className={styles.root}>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter
