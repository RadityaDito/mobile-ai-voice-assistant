import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";

const welcome = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 flex justify-around items-center bg-white px-8">
      <View className="text-center space-y-3">
        <Text
          style={{ fontSize: wp(10) }}
          className="  font-bold text-center text-gray-700"
        >
          Jarvis
        </Text>
        <Text
          style={{ fontSize: wp(4) }}
          className="text-md text-center  tracking-wider"
        >
          The Future is here, powered by AI.
        </Text>
      </View>
      <View className="">
        <Image
          style={{ width: wp(75), height: wp(75) }}
          source={require("../assets/images/welcome.png")}
        />
      </View>

      <TouchableOpacity
        className="bg-emerald-600 px-6 py-2 rounded-2xl w-full "
        onPress={() => router.push("/home")}
      >
        <Text
          style={{ fontSize: wp(6) }}
          className="text-white font-bold  text-center"
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default welcome;
