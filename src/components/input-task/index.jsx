import { Button, TextInput, View } from "react-native";

import { styles } from "./style";

const InputTask = ({ onHandlerChangeItem, textItem, add }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add new task..."
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        cursorColor="#5D576B"
        selectionColor="#2D1E2F"
        placeholderTextColor="#424B54"
        onChangeText={onHandlerChangeItem}
        value={textItem}
      />
      <Button title="ADD" color="#D9DCD6" onPress={add} />
    </View>
  );
};

export default InputTask;
