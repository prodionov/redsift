import React, { Component } from "react";
import * as d3 from "d3";

const Email = ({ sender, dkim, spf }) => {
  return (
    <li className="email-list-item">
      <span>
        <strong>{sender}</strong>
      </span>
      <img
        className="ticks"
        src={
          dkim ? require("./assets/cross.png") : require("./assets/tick.png")
        }
        height="15rem"
      />
      <img
        className="ticks"
        src={spf ? require("./assets/cross.png") : require("./assets/tick.png")}
        height="15rem"
      />
    </li>
  );
};

class Dmrac extends Component {
  state = {
    emails: [
      { id: 1, sender: "jack@redsift.io", dkim: true, spf: true },
      { id: 2, sender: "rpavelleron@gmail.com", dkim: true, spf: false },
      { id: 3, sender: "james.bond@gmail.com", dkim: false, spf: false },
      { id: 4, sender: "rihanna@hollywood.com", dkim: true, spf: true },
      { id: 5, sender: "ronaldo@football.com", dkim: true, spf: true }
    ]
  };

  componentDidMount() {}

  render() {
    const { emails } = this.state;
    console.log("emails", emails);
    return (
      <div>
        <h2>Latest emails</h2>
        <div id="dmrac" className="first-line">
          <ul className="emails-list">
            {emails.map(email => <Email key={email.id} {...email} />)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Dmrac;
