import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";

export default function HomeScreen() {
  const [user1Time, setuser1Time] = useState<number>(180);
  const [user1TimeRunning, setuser1TimeRunning] = useState<Boolean>(false);
  const [user2TimeRunning, setuser2TimeRunning] = useState<Boolean>(false);
  const [user2Time, setuser2Time] = useState<number>(180);
  const [user2TimeInterval, setUser2TimeInterval] =
    useState<NodeJS.Timeout | null>(null);
  const [user1TimeInterval, setUser1TimeInterval] =
    useState<NodeJS.Timeout | null>(null);

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
            setuser2TimeRunning(false);
            setuser1TimeRunning(true);
            if (user2TimeInterval !== null) {
              clearInterval(user2TimeInterval);
            }
            let user1ClockIntervalVar = setInterval(() => {
              setuser1Time((user1Time) => user1Time - 1);
            }, 1000);
            setUser1TimeInterval(user1ClockIntervalVar);
          }}
        >
          <Text style={{ fontSize: 70, textAlign: "center" }}>
            {Math.floor(user1Time / 60)}:{user1Time % 60}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, backgroundColor: "lightblue" }}></View>
      <View style={{ flex: 5, backgroundColor: "yellow" }}>
        <TouchableOpacity
          onPress={() => {
            if (user2TimeRunning) {
              return;
            }
            setuser1TimeRunning(false);
            setuser2TimeRunning(true);
            if (user1TimeInterval !== null) {
              clearInterval(user1TimeInterval);
            }

            let user2ClockIntervalVar = setInterval(() => {
              setuser2Time((user2Time) => user2Time - 1);
            }, 1000);
            setUser2TimeInterval(user2ClockIntervalVar);
          }}
        >
          <Text style={{ fontSize: 70, textAlign: "center" }}>
            {Math.floor(user2Time / 60)}:{user2Time % 60}
          </Text>
        </TouchableOpacity>
      </View>
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
