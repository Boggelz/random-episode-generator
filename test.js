const officeUK = {
  1: {
    1: "Downsize",
    2: "Work Experience",
    3: "The Quiz",
    4: "Training",
    5: "New Girl",
    6: "Judgement",
  },
  2: {
    1: "Merger",
    2: "Appraisals",
    3: "Party",
    4: "Motivation",
    5: "Charity",
    6: "Interview",
  },
  Specials: {
    1: "Christmas: Part 1",
    2: "Christmas: Part 2",
  },
};

function getRandomEpisode(officeUK) {
  const seasons = Object.keys(officeUK);
  const randomSeasonKey = seasons[Math.floor(Math.random() * seasons.length)];
  const randomSeason = officeUK[randomSeasonKey];

  const episodes = Object.keys(randomSeason);
  const randomEpisodeKey =
    episodes[Math.floor(Math.random() * episodes.length)];

  return {
    season: randomSeasonKey,
    number: randomEpisodeKey,
    title: randomSeason[randomEpisodeKey],
  };
}

document
  .getElementById("generateEpisode")
  .addEventListener("click", function () {
    const episode = getRandomEpisode(officeUK);
    console.log(
      `Season: ${episode.season}, Episode: ${episode.number}, Title: ${episode.title}`
    );
  });
