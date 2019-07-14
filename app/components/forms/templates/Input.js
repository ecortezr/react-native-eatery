import React from "react";
import { StyleSheet, View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

export default (inputTemplate = local => {
  return (
    <View style={styles.view}>
      <Input
        placeholder={local.config.placeholder}
        password={local.config.password}
        secureTextEntry={local.config.secureTextEntry}
        leftIcon={{
          type: local.config.iconType,
          name: local.config.iconName
        }}
        leftIconContainerStyle={styles.iconContainer}
        onChangeText={v => local.onChange(v)}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  view: {
    marginBottom: 40
  },
  iconContainer: {
    paddingRight: 20
  }
});
