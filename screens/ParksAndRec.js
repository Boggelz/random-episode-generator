import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";
import { useState, useEffect } from "react";
import { PARKSANDREC } from "../shows/parksAndRec";

const parksAndRecEps = PARKSANDREC;

const ParksAndRec = () => {
  const [randomEpisode, setRandomEpisode] = useState(null);

  const getRandomEpisode = () => {
    const seasons = Object.keys(parksAndRecEps);
    const randomSeason = seasons[Math.floor(Math.random() * seasons.length)];

    const episodes = Object.values(parksAndRecEps[randomSeason]);
    const randomEpisode = episodes[Math.floor(Math.random() * episodes.length)];

    setRandomEpisode({
      season: randomSeason,
      episode: randomEpisode,
    });
  };

  return (
    <View style={{ backgroundColor: "#424549", height: "100%" }}>
      <View style={styles.card}>
        <View style={styles.cardTitle}>
          <Text style={styles.titleText}>Parks and Recreation</Text>
        </View>
        <Image
          source={require("../assets/img/parksAndRec.jpg")}
          style={styles.cardImage}
        />
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={getRandomEpisode}
          >
            <Text style={styles.buttonText}>Random Episode</Text>
          </TouchableOpacity>
          <View style={styles.episodeView}>
            {randomEpisode && (
              <Text style={styles.episodeText}>
                Season: {randomEpisode.season} Episode: {randomEpisode.episode}
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#36393e",
    marginTop: 55,
    height: 800,
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
  },
  buttonView: {
    flex: 1,
    alignItems: "center",
    marginTop: 16,
  },
  cardButton: {
    backgroundColor: "#282b30",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
  },
  episodeView: {
    marginTop: 25,
  },
  episodeText: {
    color: "white",
    fontSize: 24,
  },
});

export default ParksAndRec;
