import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  renderPickerItems() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return days.map(day =>
      <Picker.Item key={day} label={day} value={day} />
    );
  }

  render() {
    return (
      <View>
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
      </View>
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
  const { name, shift, phone } = state.employeeForm;
  return { name, shift, phone };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
