import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Redirect } from "expo-router";

const index = () => {
  return (
    // <SafeAreaView className="flex-1 bg-slate-300">
    //   <View className="flex flex-1 bg-slate-300 flex-col">
    //     <Text className="text-white text-xl">Index</Text>
    //     <Text className="text-white text-xl">Index2</Text>
    //     <Link href="/welcome">
    //       <Text className="text-white text-xl">Welcome</Text>
    //     </Link>
    //   </View>
    // </SafeAreaView>
    <Redirect href="/welcome" />
  );
};

export default index;

const styles = StyleSheet.create({});
