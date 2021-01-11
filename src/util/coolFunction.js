const coolFunction = (favoriteColor) => {
  const name = "Alex";

  let favColor = "blue";

  let favoriteNum = 10;

  if (favoriteColor) {
    favColor = favoriteColor;
    favoriteNum += 50;
  }

  return {
    name,
    favoriteColor: favColor,
    favoriteNumber: favoriteNum
  }
}

module.exports = coolFunction;