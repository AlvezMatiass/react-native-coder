import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";

import { styles } from "./styles";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const [isVisible, setIsVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const onHandlerChangeItem = (t) => setTextItem(t);

  const add = () => {
    if (textItem === "") {
      console.log("no hay datos encontrados");
    } else {
      setItemList((currentItems) => [
        ...currentItems,
        { id: Math.random().toString(), value: textItem },
      ]);
      setTextItem("");
    }
  };

  const onHandlerModal = (item) => {
    setIsVisible(true);
    setItemSelected(item);
  };

  const onHandlerDelete = (id) => {
    setItemList((prevTask) => prevTask.filter((task) => task.id !== id));
    setIsVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
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
          <Button title="add" color="#537A5A" onPress={add} />
        </View>

        <FlatList
          data={itemList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onHandlerModal(item)}>
              <Text style={styles.textItemList}>{item.value}</Text>
            </TouchableOpacity>
          )}
        />

        <Modal animationType="slide" visible={isVisible}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Task Detail</Text>
            <View style={styles.modalDetailContainer}>
              <Text style={styles.modalDetailText}>Are you sure you want to delete the task?</Text>
              <Text style={styles.modalItemText}>{itemSelected?.value}</Text>
            </View>
            <View style={styles.modalButtonContainer}>
              <Button title="CANCEL" color="#313142" onPress={() => setIsVisible(false)} />
              <Button
                title="DELETE"
                color="#112312"
                onPress={() => onHandlerDelete(itemSelected?.id)}
              />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
