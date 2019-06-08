class Character{
  constructor(name, age, favoritesong){
    this._name = name;
    this._age = age;
    this._favoritesong = favoritesong;
  }
  getName(){
    return this.name +" " + this.favoritesong;
     }
    }

class Wizard extends Character {
  constructor(pointyhat, hatColor){
    super(name, age, favoritesong);
      this._pointyhat = pointyhat;
      this._hatColor = hatColor;
  }
  castSpell(){
    console.log('Wizards cast spells' + this._pointyhat + this._hatColor);
  }
}

class Bard extends Character{
  constructor(playsSong){
    super(name, age, favoritesong);
    this._playSong = playSong;
  }
  playSong('songTitle'){
   console.log('Bards plays instrument' + this._playSong + this.name + this.favoritesong);
  }
}


let myCharacter = new Character("Tim","17", "We Are Young");
let anotherCharacter = new Character("Ronda","28", "My Heart Will Go On");
let thirdCharacter = new Character("Emma","21","Thriller");
let fourthCharacter = new Character("James","25","Teardrops on my Guitar");

console.log(myCharacter);

let myWizard = new Wizard ('Jack', 40, 'Dream On', 'red');
  myWizard.castSpell();

let myBard = new Bard ('Alvin', 38 , 'I Wanna Dance with Somebody', 'guitar');
   myBard.playSong(songTitle);
