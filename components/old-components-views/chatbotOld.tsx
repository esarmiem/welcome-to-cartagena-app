import React, { useState, useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";


interface Message {
  type: 'sent' | 'received';
  text: string;
}

export const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [pendingMessage, setPendingMessage] = useState<string>("");
  const [typingMessage, setTypingMessage] = useState<string>("");
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSubmit = async () => {
    if (!pendingMessage.trim()) return;

    // Agrega el mensaje pendiente al estado inmediatamente
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: 'sent', text: pendingMessage }
    ]);

    const requestBody = { query: pendingMessage };

    // Limpia el mensaje pendiente del input
    setPendingMessage("");

    try {
      const response = await fetch("http://192.168.1.5:8080/ask_pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        renderTypingEffect(data.respuesta);
      } else {
        console.error("Error al realizar la solicitud:", response.status);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const renderTypingEffect = (text: string) => {
    const words = text.split(" ");
    let currentIndex = 0;
    setTypingMessage("");

    const interval = setInterval(() => {
      setTypingMessage((prev) => prev + (prev ? " " : "") + words[currentIndex]);
      currentIndex++;
      scrollViewRef.current?.scrollToEnd({ animated: true });
      if (currentIndex === words.length) {
        clearInterval(interval);
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'received', text: text }
        ]);
        setTypingMessage(""); // Clear typing message after complete
      }
    }, 50); // Adjust the speed here (faster)
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages, typingMessage]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.messageContainer}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map((msg, index) => (
          <Text key={index} style={[styles.message, msg.type === 'sent' ? styles.sent : styles.received]}>
            {msg.text}
          </Text>
        ))}
        {typingMessage && (
          <Text style={[styles.message, styles.received]}>
            {typingMessage}
          </Text>
        )}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pregunta a tu asistente virtual..."
          onChangeText={(text) => setPendingMessage(text)}
          value={pendingMessage}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <Ionicons name="arrow-up-circle" size={40} color="#fe961b" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Chatbot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    margin: 0,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  messageContainer: {
    width: "100%",
    flexGrow: 1,
    marginBottom: 10,
  },
  message: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  sent: {
    alignSelf: "flex-end",
    backgroundColor: "#fe961b",
    color: "#fff",
  },
  received: {
    alignSelf: "flex-start",
    backgroundColor: "#f0f0f0",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
