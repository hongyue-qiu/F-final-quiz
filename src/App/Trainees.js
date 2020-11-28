import React, { Component } from 'react';
import './App.scss';
import AddMember from './AddMember';

class Trainees extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      trainees: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/trainees', {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return response.json();
      })
      .then((data) => {
        console.log(data[0].name);
        this.setState({
          trainees: data,
        });
      });
  }

  render() {
    return (
      <div className="session">
        <div className="students">
          <h2>学员列表</h2>
          <p>1.成吉思汗</p>
          {this.state.trainees.map((trainees) => {
            return <p key={`student${trainees.id}`}>{`${trainees.id}. ${trainees.name}`}</p>;
          })}
          <AddMember />
        </div>
      </div>
    );
  }
}

export default Trainees;