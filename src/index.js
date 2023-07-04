import { useState } from "react";
import { View, SafeAreaView } from "react-native";

import { DeleteItem, InputTask, ItemList } from "./components";
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
        <InputTask onHandlerChangeItem={onHandlerChangeItem} textItem={textItem} add={add} />
        <ItemList itemList={itemList} onHandlerModal={onHandlerModal} />
        <DeleteItem
          isVisible={isVisible}
          itemSelected={itemSelected}
          setIsVisible={setIsVisible}
          onHandlerDelete={onHandlerDelete}
        />
      </View>
    </SafeAreaView>
  );
}
