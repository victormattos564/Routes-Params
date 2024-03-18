import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";

export default function Category() {
  return (
    <View style={styles.container}>
      <Title title="Category" />

      <TouchButton route="Home" title="Go to Home" />

      <TouchButton route="Profile" title="Go to Profile" data={user} />
    </View>
  );
}