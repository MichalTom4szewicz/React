import React, { Component } from "react";
import ArrRow from "./arrrow";
import Counter from "./counter";

class Arr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: true
    };

    //this.text = "fsdfs";
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.change = this.change.bind(this);
  }
  render() {
    return (
      <div>
        <Counter
          cnt={this.state.count}
          inc={this.increment}
          dec={this.decrement}
        />
        <div className="arr">
          <ArrRow inc={this.increment} />
          <ArrRow inc={this.increment} />
          <ArrRow inc={this.increment} />
        </div>

        <p id="pp">allo allo</p>
        <button onClick={this.change} type="button">
          click
        </button>
      </div>
    );
  }

  change() {
    this.state.text
      ? (document.getElementById("pp").style.display = "none")
      : (document.getElementById("pp").style.display = "block");

    this.setState((prv) => {
      return {
        text: !prv.text
      };
    });
  }

  increment() {
    this.setState((prv) => {
      return {
        count: prv.count + 1
      };
    });
  }
  decrement() {
    this.setState((prv) => {
      return {
        count: prv.count === 0 ? 0 : prv.count - 1
      };
    });
  }
}

export default Arr;
