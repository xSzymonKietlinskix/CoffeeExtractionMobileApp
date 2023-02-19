import { Card } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/bar";
import Calculator from "./components/calculator";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.options}>
        <Card>
          <Card.Title>Options</Card.Title>
          <Calculator />
        </Card>
      </View>
      <StatusBar animated={true} barStyle={"default"} hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  options: {
    flex: 10,
    justifyContent: "center",
  },
});
