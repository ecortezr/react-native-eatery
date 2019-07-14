import React from "react";
import t from "tcomb-form-native";
import Input from "./templates/Input";

const Form = t.form.Form;

export const LoginStruct = t.struct({
  user: t.String,
  password: t.String
});

export const LoginOptions = {
  fields: {
    user: {
      template: Input,
      config: {
        label: "Nombre de Usuario (*)",
        placeholder: "Nombre de usuario",
        password: false,
        secureTextEntry: false,
        iconType: "font-awesome",
        iconName: "user"
      }
    },
    password: {
      template: Input,
      config: {
        label: "Contraseña (*)",
        placeholder: "Contraseña",
        password: true,
        secureTextEntry: true,
        iconType: "font-awesome",
        iconName: "lock"
      }
    }
  }
};
