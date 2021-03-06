// formule de Heinrich Gustav Magnus-Tetens

function plafondNuageux(temp, humidity) {
//   const temp = 7;
//   const humidite = 80;
  const a = 17.27;
  const b = 237.7;
  const convertionPiedEnMetre = 3.2808;
  const numerateur = ((17.27 * temp / (237.7 + temp)) + Math.log(humidity));
  const pointDeRosee = (b * numerateur) / (a - numerateur);
  const plafond = -(((temp - pointDeRosee) * 400) / convertionPiedEnMetre);
  return plafond;
}
export default plafondNuageux;
