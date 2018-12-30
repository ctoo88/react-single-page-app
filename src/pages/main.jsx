import React, { Component } from 'react';

import Home from './home/index';
import Notice from './user/notice';
import Icon from 'components/icon';

class Main extends Component {

  constructor() {

    super();
    this.state = {
      curTab: 'home',
    };
  }

  switchTab(tab) {
    
    this.setState({
      curTab: tab,
    });
  }

  render() {

    let { curTab } = this.state;

    return (
      <div className="main">
        <Home active={curTab === 'home'}/>
        <Notice active={curTab === 'notice'}/>
    
        <div className="foot-bar">
          <div className="foot-item" onClick={this.switchTab.bind(this, 'home')}>
            <Icon name="#icon-home" fillName="#icon-home-fill" active={curTab === 'home'}/>
          </div>

          <div className="foot-item" onClick={this.switchTab.bind(this, 'notice')}>
            <Icon name="#icon-notice" fillName="#icon-notice-fill" active={curTab === 'notice'}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
