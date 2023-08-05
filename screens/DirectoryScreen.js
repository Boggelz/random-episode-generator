import {
  View,
  Pressable,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card, Image } from "react-native-elements";

const DirectoryScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.cardView}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("TheOffice")}
        >
          <View style={styles.cardTitle}>
            <Text style={styles.titleText}>The Office (UK)</Text>
          </View>
          <Image
            source={require("../assets/img/officeUK.jpg")}
            style={styles.cardImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("ParksAndRec")}
        >
          <View style={styles.cardTitle}>
            <Text style={styles.titleText}>Parks and Recreation</Text>
          </View>
          <Image
            source={require("../assets/img/parksAndRec.jpg")}
            style={styles.cardImage}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#424549",
  },
  cardView: {
    paddingTop: 50,
  },
  card: {
    backgroundColor: "#36393e",
    marginHorizontal: 15,
    marginVertical: 10,
    height: 400,
  },
  cardTitle: {
    backgroundColor: "#282b30",
    padding: 5,
  },
  titleText: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
  },
  cardImage: {
    aspectRatio: 1,
    margin: 10,
  },
});

export default DirectoryScreen;
