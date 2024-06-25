import React from "react";

//lifecycle method
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  //memastikan akan memperbarui jam setiap detik
  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  //komponen aktif dalam dom dan akan
  //menjalankan jam sesuai dengan intervalnya yaitu perdetik
  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  //component tidak digunakan seihngga timer akan berhenti dan ketika dijalankan lagi jam nya sudah realtime
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
