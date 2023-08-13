import { View, StyleSheet, Text, Pressable, Image } from "react-native";

export default function GoalItem({ elData, deleteItemHandler }) {
  return (
    <Pressable
      onPress={() => deleteItemHandler(elData.item.key)}
      style={({ pressed }) => {
        pressed && styles.pressedItem;
      }}
    >
      <View style={styles.goalItem}>
        <Text style={styles.whiteText}>{elData.item.text}</Text>
        <Image style={styles.image} source={require('../assets/cat.png')}/>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#cccccc",
    backgroundColor: "#fff196",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 14,
  },
  whiteText: {
    color: "#696868",
  },
  pressedItem: {
    opacity: 0.5,
  },
  image:{
    width: 30,
    height: 30,
  }
});
