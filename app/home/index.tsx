import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Features from "../../components/Features";
import { dummyMessages } from "../../constants";

export default function home() {
  const [messages, setMessages] = useState(dummyMessages);
  const [loading, setLoading] = useState(false);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);

  const [result, setResult] = useState("");

  const clear = () => {
    setMessages([]);
  };

  const stopSpeaking = () => {
    setSpeaking(false);
  };

  // const speechStartHandler = (e: any) => {
  //   console.log("speech start event", e);
  // };
  // const speechEndHandler = (e: any) => {
  //   setRecording(false);
  //   console.log("speech stop event", e);
  // };
  // const speechResultsHandler = (e: any) => {
  //   console.log("speech event: ", e);
  //   const text = e.value[0];
  //   setResult(text);
  // };
  // const speechErrorHandler = (e: any) => {
  //   console.log("speech error: ", e);
  // };

  const startRecording = async () => {
    // setRecording(true);
    // try {
    //   await Voice.start("en-US");
    // } catch (e: any) {
    //   console.error("Error : ", e);
    // }
  };

  const stopRecording = async () => {
    // try {
    //   await Voice.stop();
    //   setRecording(false);
    //   // fetchResponse();
    // } catch (error) {
    //   console.log("error", error);
    // }
  };

  // useEffect(() => {
  //   // voice handler events
  //   Voice.onSpeechStart = speechStartHandler;
  //   Voice.onSpeechEnd = speechEndHandler;
  //   Voice.onSpeechResults = speechResultsHandler;
  //   Voice.onSpeechError = speechErrorHandler;

  //   return () => {
  //     // destroy the voice instance after component unmounts
  //     Voice.destroy().then(Voice.removeAllListeners);
  //   };
  // });

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex px-4 ">
        <View className="flex items-center justify-center">
          <Image
            style={{ width: wp(40), height: wp(40) }}
            source={require("../../assets/images/bot.png")}
          />
        </View>
        {/* Features or Message */}
        {messages.length > 0 ? (
          <View className="space-y-2">
            <Text
              style={{ fontSize: wp(5) }}
              className="text-gray-700 font-semibold ml-1"
            >
              Assistant
            </Text>
            <View
              className="bg-neutral-200 rounded-3xl p-4"
              style={{ height: hp(58) }}
            >
              <ScrollView
                overScrollMode="never"
                bounces={false}
                className="space-y-4"
                showsVerticalScrollIndicator={false}
              >
                {messages.map((message, index) => {
                  if (message.role === "assistant") {
                    //if message is photo url
                    if (message.content.includes("https://")) {
                      return (
                        <View
                          key={`message + ${index}`}
                          className="flex flex-row"
                        >
                          <View className="bg-emerald-100 p-2 rounded-xl rounded-tl-none">
                            {/* <Text>{message.content}</Text> */}
                            <Image
                              style={{ width: wp(60), height: wp(60) }}
                              source={{ uri: message.content }}
                              className="rounded-2xl "
                              resizeMode="contain"
                            />
                          </View>
                        </View>
                      );
                    } else {
                      //Text Response
                      return (
                        <View
                          key={`message + ${index}`}
                          style={{ width: wp(70) }}
                          className="bg-emerald-100 p-2 rounded-xl rounded-tl-none"
                        >
                          <Text>{message.content}</Text>
                        </View>
                      );
                    }
                  } else {
                    //user input
                    return (
                      <View
                        key={`message + ${index}`}
                        className="flex flex-row justify-end"
                      >
                        <View
                          style={{ width: wp(70) }}
                          className="bg-cyan-100 p-2 rounded-xl rounded-tr-none"
                        >
                          <Text>{message.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}

        <View className="flex justify-center items-center mt-2">
          {loading ? (
            <Image
              source={require("../../assets/images/loading.gif")}
              style={{ width: hp(10), height: hp(10) }}
            />
          ) : recording ? (
            <TouchableOpacity className="space-y-2" onPress={stopRecording}>
              {/* recording stop button */}
              <Image
                className="rounded-full"
                source={require("../../assets/images/voiceLoading.gif")}
                style={{ width: hp(10), height: hp(10) }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={startRecording}>
              {/* recording start button */}
              <Image
                className="rounded-full"
                source={require("../../assets/images/recordingIcon.png")}
                style={{ width: hp(10), height: hp(10) }}
              />
            </TouchableOpacity>
          )}
          {/* Clear Button */}
          {messages.length > 0 && (
            <TouchableOpacity
              className="bg-neutral-400 p-2 absolute right-5 rounded-3xl"
              onPress={clear}
            >
              <Text className="text-white">Clear Chat</Text>
            </TouchableOpacity>
          )}

          {/* Stop Button */}
          {speaking && (
            <TouchableOpacity
              className="bg-red-400 p-2 absolute left-10 rounded-3xl"
              onPress={stopSpeaking}
            >
              <Text className="text-white">Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}
