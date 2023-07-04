import { Text, Button, View, Modal } from "react-native";

import { styles } from "./style";

const DeleteItem = ({ isVisible, itemSelected, setIsVisible, onHandlerDelete }) => {
  return (
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
  );
};

export default DeleteItem;
