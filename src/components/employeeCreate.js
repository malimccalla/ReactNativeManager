import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {


  onButtonPress() {
    const { name, phone, shift, employeeCreate } = this.props;
    employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  renderPickerItems() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return days.map(day =>
      <Picker.Item key={day} label={day} value={day} />
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
            label="Name"
            placeholder="Jane"
            value={this.props.name}
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabel}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
            style={{ flex: 1 }}
          >
            {this.renderPickerItems()}
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerLabel: {
    color: '#383A3F',
    fontSize: 15,
    paddingLeft: 15,
    paddingTop: 5
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
})(EmployeeCreate);
