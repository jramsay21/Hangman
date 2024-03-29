// This is the entire word dictionary for the web app. Categorised by theme and difficulty

const songs = {
  easy: ['Hey Jude', 'Bad Habits', 'Wrecking Ball', 'Despacito', 'My Girl'],
  normal: ['Stairway to Heaven', 'Gold Digger', 'Enter Sandman', 'Clint Eastwood', 'I Just Called To Say I Love You'],
  hard: ['New Perspective', 'The Continuing Story of Bungalow Bill', 'Seven Seas of Rhye', 'Desolation Row', 'Speed Demon'],
};


const films = {
  easy: ['The Avengers', 'Titanic', 'Coco', 'Shawshank Redemption', 'Dune'],
  normal: ['The Green Mile', 'American Psycho', 'Independance Day', 'Full Metal Jacket', 'Encanto'],
  hard: ['Crank', 'Terrifier', 'Catch a Fire', 'Ex Machina', 'In the Heart of the Sea'],
};

const games = {
  easy: ['Among Us', 'Grand Theft Auto', 'Minecraft', 'The Legend of Zelda', 'Valorant'],
  normal: ['Shin Megami Tensei', 'Jet Set Radio', 'Paladins', 'Fez', 'The Wolf Among Us'],
  hard: ['Poker Night at the Inventory', 'Unturned', 'Lethal League', 'Skies of Arcadia', 'Golden Axe'],
};

const colours = {
  easy: ['Orange', 'Yellow', 'Red', 'Violet', 'Indigo'],
  normal: ['Burgundy', 'Lilac', 'Fuchsia', 'Aquamarine', 'Malibu'],
  hard: ['Amaranth', 'Cornsilk', 'Feldgrau', 'Gunmetal', 'Phlox'],
};

const animals = {
  easy: ['Rhinoceros', 'Scorpion', 'Vulture', 'Ant', 'Mantis'],
  normal: ['Capybara', 'Echidna', 'Macaw', 'Salamander', 'Yak'],
  hard: ['Exceed', 'Moogle', 'Sky Bison', 'Loftwing', 'Alcremie'],
};

export const list = [songs, films, games, colours, animals];
