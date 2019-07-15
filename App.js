import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";

// Form configuration
import t from "tcomb-form-native";
const Form = t.form.Form;
import { LoginStruct, LoginOptions } from "./app/components/forms/testForm";

import PreLoader from "./app/components/PreLoader";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      testFormValue: {
        user: "",
        password: ""
      },
      testFormError: "",
      loaded: true
    };
  }

  onChange = testFormValue => {
    this.setState({
      testFormValue
    });
  };

  sendFormText = () => {
    console.log("Enviando...");
    console.log(this.state.testFormValue);
    const validate = this.refs.formTest.getValue();
    if (validate) {
      console.log("Correcto");
      this.setState({
        testFormError: ""
      });
    } else {
      console.log("Incorrecto");
      this.setState({
        testFormError: "Los campos marcados con * son obligatorios"
      });
    }
  };

  render() {
    const { loaded, testFormValue, testFormError } = this.state;

    if (loaded) {
      setTimeout(() => {
        this.setState({
          loaded: false
        });
      }, 3000);
      return <PreLoader />;
    } else {
      return (
        <View style={styles.container}>
          <Form
            ref="formTest"
            type={LoginStruct}
            options={LoginOptions}
            value={testFormValue}
            onChange={v => this.onChange(v)}
          />
          <Button title="Login" onPress={this.sendFormText.bind(this)} />
          <Text style={styles.testFormErrorText}>{testFormError}</Text>
        </View>
      );
    }
  }
}
/* export default function App() {
  let myRef = React.createRef();
  sendFormText = () => {
    console.log("Enviando...");
  };
  return (
    <View style={styles.container}>
      <Form ref={this.myRef} type={LoginStruct} options={LoginOptions} />
      <Button title="Login" onPress={this.sendFormText} />
    </View>
  );
} */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    padding: 40
  },
  testFormErrorText: {
    color: "#F00",
    textAlign: "center",
    paddingTop: 30
  }
});
