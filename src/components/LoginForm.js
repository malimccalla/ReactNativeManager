import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import * as actions from '../actions';


class LoginForm extends Component {
  handleEmailChange(text) {
    this.props.emailChanged(text);
  }

  handlePasswordChange(text) {
    this.props.passwordChanged(text);
  }

  handleButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="example@email.com"
            onChangeText={this.handleEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="password"
            placeholder="password"
            onChangeText={this.handlePasswordChange.bind(this)}
            value={this.props.value}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.handleButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, actions)(LoginForm);
