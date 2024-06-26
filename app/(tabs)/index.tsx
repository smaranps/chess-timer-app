import { View, Text, StyleSheet, Alert, Button } from "react-native";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";

export default function HomeScreen() {
  const [user1Time, setuser1Time] = useState<number>(60);
  const [user1TimeRunning, setuser1TimeRunning] = useState<Boolean>(false);
  const [user2TimeRunning, setuser2TimeRunning] = useState<Boolean>(false);
  const [user2Time, setuser2Time] = useState<number>(60);
  const [user2TimeInterval, setUser2TimeInterval] = useState<
    NodeJS.Timeout | undefined
  >(undefined);
  const [user1TimeInterval, setUser1TimeInterval] = useState<
    NodeJS.Timeout | undefined
  >(undefined);
  useEffect(() => {
    if (user1Time <= 0) {
      clearInterval(user1TimeInterval);
      Alert.alert("User 2 wins");
    } else if (user2Time <= 0) {
      clearInterval(user2TimeInterval);
      Alert.alert("User 1 wins");
    }
  }, [user1Time, user2Time]);
  const restartClock = (time: number) => {
    clearInterval(user1TimeInterval);
    clearInterval(user2TimeInterval);
    setuser1Time(time);
    setuser2Time(time);
    setuser1TimeRunning(false);
    setuser2TimeRunning(false);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 5,
          backgroundColor: user1TimeRunning ? "#40916c" : "#40916c",
        }}
      >
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
          style={{
            backgroundColor: "#74c69d",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 70,
              textAlign: "center",
            }}
          >
            {Math.floor(user1Time / 60)}:
            {user1Time % 60 > 10 ? user1Time % 60 : "0" + (user1Time % 60)}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#52b788",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Button
          title="1:00"
          onPress={() => {
            restartClock(60);
          }}
        />
        <Button
          title="3:00"
          onPress={() => {
            restartClock(180);
          }}
        />
        <Button
          title="5:00"
          onPress={() => {
            restartClock(300);
          }}
        />
        <Button
          title="10:00"
          onPress={() => {
            restartClock(600);
          }}
        />
      </View>
      <View style={{ flex: 5, backgroundColor: "#40916c" }}>
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
          style={{
            backgroundColor: "#74c69d",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 70, textAlign: "center" }}>
            {Math.floor(user2Time / 60)}:
            {user2Time % 60 > 10 ? user2Time % 60 : "0" + (user2Time % 60)}
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
