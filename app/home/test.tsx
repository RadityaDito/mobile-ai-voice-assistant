import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Voice from "@react-native-voice/voice";

const VoiceToText = () => {
  const [recognized, setRecognized] = useState("");
  const [started, setStarted] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e: any) => {
    setStarted("√");
  };

  const onSpeechRecognized = (e: any) => {
    setRecognized("√");
  };

  const onSpeechResults = (e: any) => {
    setResults(e.value);
  };

  const startRecognition = async () => {
    try {
      await Voice.start("en-US");
    } catch (e) {
      console.error(e);
    }
  };

  const stopRecognition = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={startRecognition}>
        <Text>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={stopRecognition}>
        <Text>Stop</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 30 }}>Recognized: {recognized}</Text>
      <Text style={{ marginTop: 30 }}>Started: {started}</Text>
      <Text style={{ marginTop: 30 }}>
        Results:{" "}
        {results.map((result, index) => (
          <Text key={index}>{result}</Text>
        ))}
      </Text>
    </View>
  );
};

export default VoiceToText;
