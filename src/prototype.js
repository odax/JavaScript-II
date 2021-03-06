/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes:
  GameObject
    createdAt
    dimensions
    destroy() // prototype method -> returns the string 'Game object was removed from the game.'
*/

class GameObject {
  constructor(gameObjectParameters) {
    this.createdAt = gameObjectParameters.createdAt;
    this.dimensions = gameObjectParameters.dimensions;
    this.phrase = 'Game object was removed from the game';
  }
  destroy() {
    return this.phrase;
  } // reason why i created this.phrase to be used in destroy is that the linter wont let me run the test without having a this keyword inside of the method here..
}   // I've tried return 'Game object was removed from the game'; but it doesn't accept that.. this is why the children are not properly inheriting it.

/*
  NPC
    hp
    name
    takeDamage() // prototype method -> returns the string '<object name> took damage.'
    // should inherit destroy() from GameObject's prototype
*/

class NPC extends GameObject {
  constructor(NPCParameters) {
    super(NPCParameters);
    this.hp = NPCParameters.hp;
    this.name = NPCParameters.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

/*
  Humanoid
    faction
    weapons
    language
    greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    // should inherit destroy() from GameObject through NPC
    // should inherit takeDamage() from NPC
*/

class Humanoid extends NPC {
  constructor(humanoidParameters) {
    super(humanoidParameters);
    this.faction = humanoidParameters.faction;
    this.weapons = humanoidParameters.weapons;
    this.language = humanoidParameters.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

/*
  Inheritance chain: Humanoid -> NPC -> GameObject
  Instances of Humanoid should have all of the same properties as NPC and GameObject.
  Instances of NPC should have all of the same properties as GameObject.

  Example:

  const hamsterHuey = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Hamster Huey',
    faction: 'Gooey Kablooie',
    weapons: [
      'bubblegum',
    ],
    language: 'Hamsterish',
  });

  hamsterHuey.greet(); // returns 'Hamster Huey offers a greeting in Hamsterish'
  hamsterHuey.takeDamage(); // returns 'Hamster Huey took damage.'
  hamsterHuey.destroy(); // returns 'Game object was removed from the game.'
*/

/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
