import { View, Text, Image } from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const features = [
  {
    title: "ChatGPT",
    description:
      "ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.",
    icon: require("../assets/images/chatgptIcon.png"),
    bgColor: "bg-emerald-200",
  },
  {
    title: "DALL-E",
    description:
      "DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.",
    icon: require("../assets/images/dalleIcon.png"),
    bgColor: "bg-purple-200",
  },
  {
    title: "Smart AI",
    description:
      "A powerful voice assistant with the abilities of ChatGPT and Dall-E, providing you the best of both worlds.",
    icon: require("../assets/images/smartaiIcon.png"),
    bgColor: "bg-cyan-200",
  },
];

export default function Features() {
  return (
    <View className="flex gap-2">
      <Text
        style={{ fontSize: wp(6.5) }}
        className="text-gray-700 font-semibold"
      >
        Features
      </Text>
      <View className="flex space-y-3">
        {features.map((feature) => (
          <View className={`${feature.bgColor} p-4 rounded-xl`}>
            <View className="flex flex-row gap-2 items-center mb-1">
              <Image
                source={feature.icon}
                style={{ width: wp(10), height: wp(10) }}
              />
              <Text className="font-semibold" style={{ fontSize: wp(4.5) }}>
                {feature.title}
              </Text>
            </View>
            <Text
              className="text-gray-700 font-medium tracking-wide"
              style={{ fontSize: wp(3.8) }}
            >
              {feature.description}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
