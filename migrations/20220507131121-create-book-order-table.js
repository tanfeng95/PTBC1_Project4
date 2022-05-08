module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('book_order', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      book_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'book',
          key: 'id',
        },
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'order',
          key: 'id',
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('book_order');
  },
};
