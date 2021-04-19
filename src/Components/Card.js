import React from 'react';

class Card extends React.Component {
  state = { User: '' };

  componentDidMount() {
    let user = this.props.match.params.user;
    this.setState({ User: user });
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: '80px' }}
      >
        <h3 className="ui header">{this.state.User}</h3>
        <p>Hi my name is {this.state.User} </p>
      </div>
    );
  }
}

export default Card;
