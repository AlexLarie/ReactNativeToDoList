import { StyleSheet, View, FlatList, Button, Modal } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [list, setList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  function toggleModalHandler() {
    setIsModalOpen((prevState) => !prevState);
  }
  function deleteItemHandler(id) {
    setList((prevList) => prevList.filter((item) => item.key !== id));
  }
  function pressButtonHandler(inputText) {
    setList((prevList) => [
      ...prevList,
      { text: inputText, key: Math.random().toString() },
    ]);
  }

  return (
    <>
      <StatusBar />
      <View style={styles.appContainer}>
        <Button
          onPress={toggleModalHandler}
          title="Add new goal"
          color={"green"}
        />
        <Modal visible={isModalOpen} animationType="slide">
          <GoalInput
            toggleModalHandler={toggleModalHandler}
            pressButtonHandler={pressButtonHandler}
          />
        </Modal>
        <View style={styles.listContainer}>
          <FlatList
            data={list}
            renderItem={(elData) => {
              return (
                <GoalItem
                  deleteItemHandler={deleteItemHandler}
                  elData={elData}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 16,
    paddingTop: 50,
    flex: 1,
  },
  listContainer: {
    flex: 4,
    paddingVertical: 16,
  },
});
