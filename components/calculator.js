import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { Text, Input, Button, Dialog, CheckBox } from "@rneui/themed";

const Calculator = () => {
  const [visible1, setVisible1] = useState(false);
  const [checked, setChecked] = useState(0);
  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };
  let brewingMethod = "none";
  function setBrewingMethod() {
    if (checked === 0) {
      return "none";
    } else if (checked === 2) {
      return "v60";
    } else if (checked === 1) {
      return "espresso";
    }
  }

  let test = 1;
  return (
    <View>
      <Button title={"Choose the brewing method"} onPress={toggleDialog1} />
      <Dialog isVisible={visible1} onBackdropPress={toggleDialog1}>
        <Dialog.Title title="Brewing Methods" />
        {["Espresso", "v60"].map((l, i) => (
          <CheckBox
            key={i}
            title={l}
            containerStyle={{ backgroundColor: "white", borderWidth: 0 }}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked === i + 1}
            onPress={() => setChecked(i + 1)}
          />
        ))}

        <Dialog.Actions>
          <Dialog.Button
            title="CONFIRM"
            onPress={() => {
              console.log(`Option ${checked} was selected!`);
              toggleDialog1();
            }}
          />
          <Dialog.Button title="CANCEL" onPress={toggleDialog1} />
        </Dialog.Actions>
      </Dialog>
      <Text>{(brewingMethod = setBrewingMethod())}</Text>
    </View>
  );
};

export default Calculator;
