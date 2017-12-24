'use strict';
module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define('Team', {
    school: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    teamname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    colorone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    colortwo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    }
  }, {
    classMethods: {
      assocaite: function(models) {

      }
    }
  });
  return Team;
};
