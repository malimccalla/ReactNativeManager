import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/employeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please login" />
      </Scene>

      <Scene key="main">
        <Scene
          key="employeeList"
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          component={EmployeeList}
          title="Employees"
          initial
        />
        <Scene key="employeeCreate" title="Create Employee" component={EmployeeCreate} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
