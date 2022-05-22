module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bookData = [
      {
        title: 'Where\'s wally?/ where\'s waldo series Activities Books English Original paperback edition',
        price: 10.7,
        image: 'where-wally.jpg',
        book_detail: '1. Where\'s Wally？2. Where\'s Wally Now ？3. Where\'s wally？ In Hollywood4. The Fantastic journey',
        brand: 'No Brand',
        publisher: 'NIL',
        author: 'NIL',
        language: 'English',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'The Hunger Game (the Hunger Games, book 1) ',
        price: 22.63,
        image: 'the-hunger-games.jpg',
        book_detail: 'In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlaying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one girl and one boy between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she is forced to represent her district in the Games. But Katniss has also resolved to outwit the creators of the games. To do that she will have to be the last person standing at the end of the deadly ordeal, and that will take every ounce of strength and cunning she has.',
        brand: 'No Brand',
        publisher: 'Scholastic Press',
        author: 'Suzanne Collins',
        language: 'English',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Catching fire (the Hunger Games, book 2)',
        price: 22.63,
        image: 'catching-fire.jpg',
        book_detail: 'The second book ithe ground-breaking Hunger Games trilogy. After winning the brutal Hunger Games, Katniss and Peeta returto their district, hoping for a peaceful future. But their victory has caused rebellioto break out ... and the Capitol has decided that someone must pay. As Katniss and Peeta are forced to visit the districts othe Capitol\'s Victory Tour, the stakes are higher thaever. Unless they caconvince the world that they are still lost itheir love for each other, the consequences will be horrifying. Thecomes the cruellest twist: the contestants for the next Hunger Games are announced, and Katniss and Peeta are forced into the arena once more.',
        brand: 'No Brand',
        publisher: 'Scholastic Press',
        author: 'Suzanne Collins',
        language: 'English',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Mockingjay (Hunger Games, Book Three)',
        price: 19.19,
        image: 'mocking-jay.jpg',
        book_detail: 'The third book in Suzanne Collins\'s phenomenal and worldwide bestselling Hunger Games trilogy. The final book in Suzanne Collins\'s worldwide bestselling Hunger Games trilogy is now available in paperback.My name is Katniss Everdeen. Why am I not dead? I should be dead.Katniss Everdeen, girl on fire, has survived, even though her home has been destroyed. There are rebels. There are new leaders. A revolution is unfolding.District 13 has come out of the shadows and is plotting to overthrow the Capitol. Though she\'s long been a part of the revolution, Katniss hasn\'t known it. Now it seems that everyone has had a hand in the carefully laid plans but her.The success of the rebellion hinges on Katniss\'s willingness to be a pawn, to accept responsibility for countless lives, and to change the course of the future of Panem. To do this, she must put aside her feelings of anger and distrust. She must become the rebels\' Mockingjay - no matter what the cost.',
        brand: 'No Brand',
        publisher: 'Scholastic Press',
        author: 'Suzanne Collins',
        language: 'English',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'HTML and CSS: Design and Build Websites Paperback',
        price: 35.05,
        image: 'HTML and CSS Design and Build Websites Paperback.jpg',
        book_detail: `A full-color introduction to the basics of HTML and CSS!
        Every day, more and more people want to learn some HTML and CSS. Joining the professional web designers and programmers are new audiences who need to know a little bit of code at work (update a content management system or e-commerce store) and those who want to make their personal blogs more attractive. Many books teaching HTML and CSS are dry and only written for those who want to become programmers, which is why this book takes an entirely new approach.`,
        brand: 'No Brand',
        publisher: 'Scholastic Press',
        author: 'Jon Duckett',
        language: 'English',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life',
        price: 18.50,
        image: 'The Subtle Art.jpg',
        book_detail: `In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be "positive" all the time so that we can truly become better, happier people.
        For decades, we’ve been told that positive thinking is the key to a happy, rich life. "F**k positivity," Mark Manson says. "Let’s be honest, shit is f**ked and we have to live with it." In his wildly popular Internet blog, Manson doesn’t sugarcoat or equivocate. He tells it like it is—a dose of raw, refreshing, honest truth that is sorely lacking today. The Subtle Art of Not Giving a F**k is his antidote to the coddling, let’s-all-feel-good mindset that has infected modern society and spoiled a generation, rewarding them with gold medals just for showing up.`,
        brand: 'No Brand',
        publisher: 'Scholastic Press',
        author: 'Mark Manson',
        language: 'English',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Think Again: The Power of Knowing What You Don\'t Know Hardcover',
        price: 35.57,
        image: 'Think Again.jpg',
        book_detail: 'Intelligence is usually seen as the ability to think and learn, but in a rapidly changing world, there\'s another set of cognitive skills that might matter more: the ability to rethink and unlearn. In our daily lives, too many of us favor the comfort of conviction over the discomfort of doubt. We listen to opinions that make us feel good, instead of ideas that make us think hard. We see disagreement as a threat to our egos, rather than an opportunity to learn. We surround ourselves with people who agree with our conclusions, when we should be gravitating toward those who challenge our thought process. The result is that our beliefs get brittle long before our bones. We think too much like preachers defending our sacred beliefs, prosecutors proving the other side wrong, and politicians campaigning for approval--and too little like scientists searching for truth. Intelligence is no cure, and it can even be a curse: being good at thinking can make us worse at rethinking. The brighter we are, the blinder to our own limitations we can become.',
        brand: 'No Brand',
        publisher: 'Scholastic Press',
        author: 'Adam Grant',
        language: 'English',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('books', bookData);
  //   const userData = [
  //     {
  //       username: 'zaver1',
  //       password: 'zaver1',
  //       created_at: new Date(),
  //       updated_at: new Date(),
  //     },
  //     {
  //       username: 'zaver2',
  //       password: 'zaver2',
  //       created_at: new Date(),
  //       updated_at: new Date(),
  //     },
  //     {
  //       username: 'zaver',
  //       password: 'zaver',
  //       created_at: new Date(),
  //       updated_at: new Date(),
  //     },
  //     {
  //       username: 'zaver3',
  //       password: 'zaver3',
  //       created_at: new Date(),
  //       updated_at: new Date(),
  //     },
  //   ];
  //   await queryInterface.bulkInsert('users', userData);
  // },
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
