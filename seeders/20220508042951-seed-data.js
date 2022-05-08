module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const bookData = [
    //   {
    //     title: 'Where\'s wally?/ where\'s waldo series Activities Books English Original paperback edition',
    //     price: 10.7,
    //     image: 'where-wally.jpg',
    //     book_detail: '1. Where\'s Wally？2. Where\'s Wally Now ？3. Where\'s wally？ In Hollywood4. The Fantastic journey',
    //     brand: 'No Brand',
    //     publisher: 'NIL',
    //     author: 'NIL',
    //     language: 'English',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     title: 'The Hunger Game (the Hunger Games, book 1) ',
    //     price: 22.63,
    //     image: 'the-hunger-games.jpg',
    //     book_detail: 'In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlaying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one girl and one boy between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she is forced to represent her district in the Games. But Katniss has also resolved to outwit the creators of the games. To do that she will have to be the last person standing at the end of the deadly ordeal, and that will take every ounce of strength and cunning she has.',
    //     brand: 'No Brand',
    //     publisher: 'Scholastic Press',
    //     author: 'Suzanne Collins',
    //     language: 'English',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     title: 'Catching fire (the Hunger Games, book 2)',
    //     price: 22.63,
    //     image: 'catching-fire.jpg',
    //     book_detail: 'The second book ithe ground-breaking Hunger Games trilogy. After winning the brutal Hunger Games, Katniss and Peeta returto their district, hoping for a peaceful future. But their victory has caused rebellioto break out ... and the Capitol has decided that someone must pay. As Katniss and Peeta are forced to visit the districts othe Capitol\'s Victory Tour, the stakes are higher thaever. Unless they caconvince the world that they are still lost itheir love for each other, the consequences will be horrifying. Thecomes the cruellest twist: the contestants for the next Hunger Games are announced, and Katniss and Peeta are forced into the arena once more.',
    //     brand: 'No Brand',
    //     publisher: 'Scholastic Press',
    //     author: 'Suzanne Collins',
    //     language: 'English',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    // ];
    // await queryInterface.bulkInsert('book', bookData);
    const userData = [
      {
        username: 'zaver1',
        password: 'zaver1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: 'zaver2',
        password: 'zaver2',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: 'zaver',
        password: 'zaver',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: 'zaver3',
        password: 'zaver3',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('users', userData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
