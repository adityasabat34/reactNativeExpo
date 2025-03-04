import { Text, View, StyleSheet, Image } from "react-native";
import PostImage from "@/assets/images/post.jpg";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={PostImage} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>Welcome to notes APP</Text>
      <Text style={styles.subtitle}>Capture your thought</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 20,
  },
});

export default HomeScreen;
