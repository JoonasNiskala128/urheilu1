//Luodaan person luokka ja sille tarvittavat construktorit sekä getterit ja setterit.
class Person {
  constructor(firstname, lastname, nickname, birthYear) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.nickname = nickname;
    this.birthYear = birthYear;
  }
  getFirstNames() {
    return this.firstname;
  }

  setFirstNames(firstNames) {
    this.firstname = firstnamenod;
  }

  getLastName() {
    return this.lastname;
  }

  setLastName(lastName) {
    this.lastname = lastname;
  }

  getNickname() {
    return this.nickname;
  }

  setNickname(nickname) {
    this.nickname = nickname;
  }

  getBirthYear() {
    return this.birthYear;
  }

  setBirthYear(birthYear) {
    this.birthYear = birthYear;
  }
}
//luodaan luokka Athlete, joka perii luokan Person ominaisuuksia. Lisätään uhreilijalle ominaisia ominaisuuksia ja niille getterit ja setterit.
class Athlete extends Person {
  constructor(
    firstname,
    lastname,
    nickname,
    birthYear,
    piclink,
    weight,
    sport,
    achievements
  ) {
    super(firstname, lastname, nickname, birthYear);
    this.piclink = piclink;
    this.weight = weight;
    this.sport = sport;
    this.achievements = achievements;
  }
  getPicLink() {
    return this.piclink;
  }

  setPicLink(piclink) {
    this.piclink = piclink;
  }

  getWeight() {
    return this.weight;
  }

  setWeight(weight) {
    this.weight = weight;
  }

  getSport() {
    return this.sport;
  }

  setSport(sport) {
    this.sport = sport;
  }

  getAchievements() {
    return this.achievements;
  }

  setAchievements(achievements) {
    this.achievements = achievements;
  }
}

//Luodaan 2 urheilijaa ja annetaan niille tiedot
const athlete1 = new Athlete(
  "Matti",
  "Näsä",
  "Masa",
  1965,
  "Google.fi/MattiNasa",
  105,
  "Wresting",
  "Olympic winner"
);
const athlete2 = new Athlete(
  "Pekka",
  "Puupää",
  "Peke",
  1977,
  "Google.fi/Pekkapuupaa",
  65,
  "HighJump",
  "1st in Europe challenge"
);

//Tulostetaan kahden urheilijan tiedot ja haetaan tiedot gettereillä.
console.log("Athlete 1:");
console.log("First Names:", athlete1.getFirstNames());
console.log("Last Name:", athlete1.getLastName());
console.log("Nickname:", athlete1.getNickname());
console.log("Birth Year:", athlete1.getBirthYear());
console.log("Weight:", athlete1.getWeight());
console.log("Sport:", athlete1.getSport());
console.log("Achievements:", athlete1.getAchievements());
console.log("-------------------");

console.log("Athlete 2:");
console.log("First Names:", athlete2.getFirstNames());
console.log("Last Name:", athlete2.getLastName());
console.log("Nickname:", athlete2.getNickname());
console.log("Birth Year:", athlete2.getBirthYear());
console.log("Weight:", athlete2.getWeight());
console.log("Sport:", athlete2.getSport());
console.log("Achievements:", athlete2.getAchievements());
console.log("-------------------");

//Testataan setterin toimintaa muuttamalla urheilija 1 painoa
athlete1.setWeight(80);
console.log("Updated Weight for Athlete 1:", athlete1.getWeight());
