import { FlatList, TouchableOpacity, Text } from "react-native";

import { styles } from "./style";

const ItemList = ({ itemList, onHandlerModal }) => {
  return (
    <FlatList
      data={itemList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onHandlerModal(item)}>
          <Text style={styles.textItemList}>{item.value}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default ItemList;
