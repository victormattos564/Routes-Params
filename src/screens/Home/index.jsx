import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Title from "../../components/Title";
import { user } from "../../data/Profile";
export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title={"Home - 🐵Ⓜ"} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile", { user })}
      >
        <Text style={styles.text}>Go to Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Category", { user })}
      >
        <Text style={styles.text}>Go to Category</Text>
      </TouchableOpacity>
    </View>
  );
}
("");
