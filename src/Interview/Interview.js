import React, { Component } from "react";

import "./Interview.css";

class Interview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: "Korra" },
        { name: "Frank" },
        { name: "Josh" },
        { name: "Heather" },
      ],
      devices: [
        { name: "LG Stylo" },
        { name: "iPhone 8" },
        { name: "Google Pixel" },
        { name: "Motorola Razr" },
        { name: "Samsung Galazy 999" },
      ],
    };
  }

  toggleSelectUser = (index) => {
    this.setState({
      users: this.state.users.map((user, i) => {
        const result =
          i === index ? { ...user, selected: !user.selected } : user;
        return result;
      }),
    });
  };

  toggleSelectDevice = (index) => {
    this.setState({
      devices: this.state.devices.map((device, i) => {
        const result =
          i === index ? { ...device, selected: !device.selected } : device;
        return result;
      }),
    });
  };

  render = () => {
    return (
      <div style={{ display: "flex" }}>
        <div className="box">
          <div className="header bg-greenyellow">Users</div>
          {this.state.users.map((item, i) => {
            return (
              <div
                onClick={() => this.toggleSelectUser(i)}
                className={`row-item ${item.selected ? "selected" : ""}`}
              >
                {item.name}
              </div>
            );
          })}
        </div>

        <div className="box box-horizontal">
          <div className="header bg-blue">Devices</div>
          {this.state.devices.map((item, i) => {
            return (
              <span
                onClick={() => this.toggleSelectDevice(i)}
                className={`row-item row-item-horizontal ${
                  item.selected ? "selected rounded" : ""
                }`}
              >
                {item.name}
              </span>
            );
          })}
        </div>
      </div>
    );
  };
}

export default Interview;
