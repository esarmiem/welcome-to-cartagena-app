import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { ThemedView } from '@/components/ThemedView';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

const TextInputIA = () => {
  return (
    <ThemedView style={styles.SearchContainer}>
      <TextInput
        placeholder="Pregunta a tu asistente virtual"
        style={styles.Search}
      ></TextInput>
      <TouchableOpacity>
        <TabBarIcon name={"search-circle-sharp"} color={"#fe961b"} size={36} />
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  SearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#f0f0f0',
  },
  Search: {
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '80%',
    maxWidth: 300,
    flex: 1,
    fontSize: 16,
  },
});

export default TextInputIA;
