function Character(id, part, image, name, description, role, skill, origin, alias, bounty) {
    this.id = id;
    this.part = part;
    this.image = image;
    this.name = name;
    this.description = description;
    this.role = role;
    this.skill = skill;
    this.origin = origin;
    this.alias = alias;
    this.bounty = bounty;
}

const luffy = new Character(
    '1',
    'pirates',
    '../src/assets/luffy.jpg',
    'Monkey D. Luffy',
    'Monkey D. Luffy, commonly known as "Straw Hat Luffy" or simply "Straw Hat", is the founder, captain, and strongest combatant of the increasingly infamous and powerful Straw Hat Pirates. He fearlessly pursues the legendary treasure of the late Gol D. Roger in order to become the new Pirate King, and reach a further, untold dream (currently known to only his crew and closest friends). He believes that being the Pirate King means having the most freedom in the world.', 
    'Captain of the Straw Hat Pirates', 
    'Rubber-rubber fruit',
    'Goa Kingdom (East Blue)',
    'Strawhat Luffy',
    '3 000 000 000 Beri'
    );

const zoro = new Character(
    '2',
    'pirates',
    '../src/assets/zoro.jpg',
    'Roronoa Zoro',
    `Roronoa Zoro, also known as "Pirate Hunter" Zoro, is a main combatant of the Straw Hat Pirates, one of their two swordsmen, one of the Senior Officers of the Straw Hat Grand Fleet, and is publicly recognized as the right-hand man of his crew's captain Monkey D. Luffy. Formerly a bounty hunter, he is the second member of Luffy's crew and the first to join it, doing so in the Romance Dawn Arc.`,
    'Vice Captain of the Straw Hat Pirates', 
    'Swordsman',
    'East Blue',
    'Pirate Hunter Zoro',
    '1 111 000 000 Beri'
    );

export const pirates = [luffy, zoro];

const garp = new Character(
    '1',
    'marines',
    '../src/assets/garp.jpg',
    'Monkey D. Garp',
    `Monkey D. Garp, also known as "Garp the Fist", is an extremely famous and powerful Marine Vice Admiral. He is the father of Monkey D. Dragon, the paternal grandfather of Monkey D. Luffy, and the adoptive grandfather of Portgas D. Ace. He was responsible for overseeing Ace's birth and raising a young Luffy, before entrusting them both to the Dadan Family.`,
    'Vice Admiral', 
    'Super strength',
    'Goa Kingdom (East Blue)',
    "Garp the Fist",
    'No Bounty'
    );
const smoker = new Character(
    '2',
    'marines',
    '../src/assets/smoker.jpg',
    'Smoker the White Hunter',
    `Smoker the White Hunter is a Marine vice admiral and the Commander of the G-5 Marine base, following the treason of his former superior Vergo. He was first introduced as a captain in Loguetown, where he made it his mission to capture Luffy, and was later promoted to the rank of commodore, due to the events in the Arabasta Kingdom. Since his debut, he has been the superior of Tashigi, serving as her mentor as well.`,
    'Vice Admiral', 
    'Smoke-smoke fruit',
    'Grand Line',
    'The White Hunter',
    'No Bounty'
    );

export const marines = [garp, smoker];