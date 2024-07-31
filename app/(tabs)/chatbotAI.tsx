import React, { useState, useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
  KeyboardAvoidingView, 
  Platform,
  Keyboard
} from "react-native";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
  useTheme,
} from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedTextInput } from "@/components/ThemedTextInput";

interface Message {
  type: "sent" | "received";
  text: string;
}

export const chatbot = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [pendingMessage, setPendingMessage] = useState<string>("");
  const [typingMessage, setTypingMessage] = useState<string>("");
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      'keyboardWillShow',
      () => setKeyboardOffset(90)
    );
    const keyboardWillHideListener = Keyboard.addListener(
      'keyboardWillHide',
      () => setKeyboardOffset(0)
    );

    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  const handleSubmit = async () => {
    if (!pendingMessage.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "sent", text: pendingMessage },
    ]);

    const requestBody = { query: pendingMessage };

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
          { type: "received", text: text },
        ]);
        setTypingMessage("");
      }
    }, 50);
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages, typingMessage]);

  return (
    <ThemeProvider value={theme}>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <ScrollView
          style={styles.messageContainer}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current?.scrollToEnd({ animated: true })
          }
        >
          {messages.map((msg, index) => (
            <ThemedText
              key={index}
              style={[
                styles.message,
                msg.type === "sent" ? styles.sent : styles.received,
              ]}
            >
              {msg.text}
            </ThemedText>
          ))}
          {typingMessage && (
            <ThemedText style={[styles.message, styles.received]}>
              {typingMessage}
            </ThemedText>
          )}
        </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoidingView}
          keyboardVerticalOffset={keyboardOffset}
        >
          <ThemedView style={[styles.inputContainer, { backgroundColor: theme.colors.background }]}>
            <ThemedTextInput
              style={styles.input}
              placeholder="Pregunta a tu asistente virtual..."
              onChangeText={(text) => setPendingMessage(text)}
              value={pendingMessage}
            />
            <TouchableOpacity onPress={handleSubmit}>
              <Ionicons name="arrow-up-circle" size={40} color="#fe961b" />
            </TouchableOpacity>
          </ThemedView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ThemeProvider>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    margin: 0,
    paddingTop: 20,
  },
  messageContainer: {
    width: "100%",
    flexGrow: 1,
    marginBottom: 10,
    paddingHorizontal: 12,
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
    overflow: "hidden",
  },
  received: {
    alignSelf: "flex-start",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 24,
  },
  input: {
    width: "85%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  keyboardAvoidingView: {
    width: "100%",
  },
});

export default chatbot;