module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.TEXT('long'),
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
      },
      image: {
        type: Sequelize.STRING,
      },
      book_detail: {
        type: Sequelize.TEXT('long'),
      },
      brand: {
        type: Sequelize.STRING,
      },
      publisher: {
        type: Sequelize.STRING,
      },
      author: {
        type: Sequelize.STRING,
      },
      language: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('books');
  },
};
