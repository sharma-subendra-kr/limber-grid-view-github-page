export const getRandomTitle = () => {
  const arr = [
    "Skipper",
    "Kowalski, what's out trajectory?",
    "Kowalski, analysis!",
    "Rico, the glowy thing!",
    "Rico, bust us out of this delicious prison.",
    "The moment's gone. Private ruined it.",
    "Are you questioning my leadership, Private?",
    "Nice work, Rico! You are a meaningful and valued member of this team.",
    "Minions",
    "CHEEZY dibbles",
    "I am Despicable",
    "Don't take bath everyday and save the climate!",
    "It's a banana. Ha-hah-ha. Yum yum.",
    "Boss",
  ];

  const index = Math.floor(Math.random() * 11);
  return arr[index];
};

export const getTitle = (index) => {
  const arr = [
    "Skipper",
    "Kowalski, what's out trajectory?",
    "Kowalski, analysis!",
    "Rico, the glowy thing!",
    "Rico, bust us out of this delicious prison.",
    "The moment's gone. Private ruined it.",
    "Are you questioning my leadership, Private?",
    "Nice work, Rico! You are a meaningful and valued member of this team.",
    "Minions",
    "CHEEZY dibbles",
    "I am Despicable",
    "Don't take bath everyday and save the climate!",
    "It's a banana. Ha-hah-ha. Yum yum.",
    "Boss",
  ];

  return arr[index];
};
