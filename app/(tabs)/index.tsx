import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";

export default function HomeScreen() {
  const [user1Time, setuser1Time] = useState<number>(180);
  const [user1TimeRunning, setuser1TimeRunning] = useState<Boolean>(false);
  const [user2Time, setuser2Time] = useState<number>(180);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 5,
          backgroundColor: user1TimeRunning ? "pink" : "green",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if (user1TimeRunning) {
              return;
            }
            setuser1TimeRunning(true);
            setInterval(() => {
              setuser1Time((user1Time) => user1Time - 1);
            }, 1000);
          }}
        >
          <Text style={{ fontSize: 70, textAlign: "center" }}>
            {Math.floor(user1Time / 60)}:{user1Time % 60}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, backgroundColor: "lightblue" }}></View>
      <View style={{ flex: 5, backgroundColor: "yellow" }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
