import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
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

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.handleButtonPress.bind(this)}>
        Login
      </Button>
    );
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

        <Text style={styles.error}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, actions)(LoginForm);
