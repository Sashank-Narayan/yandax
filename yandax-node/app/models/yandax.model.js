module.exports = (sequelize, Sequelize) => {
    const Yandax = sequelize.define("yandax", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Yandax;
  };