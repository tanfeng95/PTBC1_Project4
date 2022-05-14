export default function initBookModel(sequelize, DataTypes) {
  return sequelize.define(
    'books',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
      },
      image: {
        type: DataTypes.STRING,
      },
      book_detail: {
        type: DataTypes.STRING,
      },
      brand: {
        type: DataTypes.STRING,
      },
      publisher: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
      language: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    },
  );
}
