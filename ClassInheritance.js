class Character {
  constructor(name, age, favoritesong) {
    this.name = name;
    this.age = age;
    this.favoritesong = favoritesong;
  }

  getName() {
    console.log(`${this.name} favorite song is`+ " " + this.favoritesong + " she is " + this.age);
  }
}

class Wizard extends Character {
  constructor(name, age, favoritesong, hatColor) {
    super(name, age, favoritesong );
    this.hatColor = hatColor;

  }
  castSpell(){
    console.log(this.name + this.hatColor + " And casts a Spell")
  }
  getName() {
    console.log(`${this.name} favorite song is`+ " " + this.favoritesong + " he is " + this.age + " and a wizard");
  }
}

class Bard extends Character {
  constructor(name, age, favoritesong, instrument){
    super(name, age, favoritesong);
    this.instrument = instrument;
  }
plays(){
  console.log(this.name + " plays " +  this.instrument)
}

getName() {
  console.log(`${this.name} favorite song is`+ " " + this.favoritesong + " he is " + this.age + " and a bard");
}

}

let a = new Character("Amy's", 12, "Stars that shine");
a.getName();

let b = new Bard("Rocky's", 30, "Baby One More Time", "guitar");
b.getName();
b.plays();

let d = new Wizard("John's", 30, "We Will Rock You", " Hat Color is Blue" );
d.getName();
d.castSpell();
