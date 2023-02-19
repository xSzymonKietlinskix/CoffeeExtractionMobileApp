import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { Header as HeaderRNE, HeaderProps, Icon } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Dialog, CheckBox, ListItem, Avatar } from "@rneui/themed";

const Header = () => {
  const [visible1, setVisible1] = useState(false);
  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };
  return (
    <SafeAreaProvider>
      <HeaderRNE
        rightComponent={
          <TouchableOpacity onPress={toggleDialog1}>
            <Icon type="antdesign" name="question" color="white" />
          </TouchableOpacity>
        }
        leftComponent={<Icon type="antdesign" name="delete" color="white" />}
        centerComponent={{ text: "TDS to Extraction", style: styles.heading }}
      />
      <Dialog isVisible={visible1} onBackdropPress={toggleDialog1}>
        <Dialog.Title title="App info" />
        <Text>App caltulates the % of extraction based on %TDS</Text>
        <Dialog.Actions>
          <Dialog.Button title="close" onPress={toggleDialog1} />
        </Dialog.Actions>
      </Dialog>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#397af8",
    marginBottom: 20,
    width: "100%",
    paddingVertical: 15,
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  subheaderText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Header;
