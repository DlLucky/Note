import React from 'react';
import produce from 'immer';
import { formatData } from '@util';

const prodData = formatData();

export default class Three extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      takeUpTime: 0,
    };
  }

  clickMe = (data, key) => {
    const start = new Date().getTime();
    const newData = produce(data, draft => { // eslint-disable-line
      draft[key].isShow = !draft[key].isShow; // eslint-disable-line
    });
    const end = new Date().getTime();
    this.setState({ takeUpTime: end - start });
  };

  render() {
    const { takeUpTime } = this.state;
    return (
      <div className="card">
        <h2>3、使用Immer</h2>
        <hr />
        <div className="operate">
          <button type="button" onClick={() => this.clickMe(prodData, 'key9')}>
            点我
          </button>
          <p>
            耗时<span>{takeUpTime}ms</span>
          </p>
        </div>
      </div>
    );
  }
}
