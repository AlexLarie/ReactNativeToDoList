import {
  TextInput,
  View,
  Button,
  StyleSheet,
  Image,
} from "react-native";
import { useState } from "react";

export default function GoalInput({toggleModalHandler, pressButtonHandler}) {
  const [inputValue, setInputValue] = useState("");
  function inputChangeHandler(enteredText) {
    setInputValue(enteredText);
  }

  function addGoalHandler(){
    pressButtonHandler(inputValue);
    setInputValue('');
    toggleModalHandler();
  }
  
  return (
    <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/cat.png')}/>
      <TextInput
        onChangeText={inputChangeHandler}
        value={inputValue}
        style={styles.textInputStyles}
        placeholder="Goal"
      />
      <View style={styles.buttons}>
        <Button color={'green'} onPress={addGoalHandler} title="Add goal" />
        <Button title="Cancel" color={'red'} onPress={toggleModalHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputStyles: {
    borderWidth: 3,
    borderColor: "#cccccc",
    padding: 16,
    borderRadius: 20,
    width: "100%",
    margin: 20,
    backgroundColor: "#fff196"
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: '#d7fadd',
  },
  buttons: {
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 80,
  }
})
