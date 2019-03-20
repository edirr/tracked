const Sequelize = require('sequelize');

//Connecting to the database and set up some behavior
//db needs to be created in SQL 
//want underscored and returning values
const db = new Sequelize({
  database: 'tracked_db',
  dialect:  'postgres',
  define:   {
    underscored: true,
    returning:   true,
  },
});


// House has many students
const User = db.define('user', {
  name:    Sequelize.STRING(64),
  email:    Sequelize.STRING(64),
  password:  Sequelize.STRING(64),
});

// Student must have one house
const Student = db.define('student', {
  fname: Sequelize.STRING(32),
  lname: Sequelize.STRING(32),
  age: Sequelize.INTEGER,
});

const MathTest = db.define('mathTest', {
    name: Sequelize.STRING(32),
    grade: Sequelize.INTEGER,
    date: Sequelize.DATE,
  });

const ElaTest = db.define('elaTest', {
    name: Sequelize.STRING(32),
    grade: Sequelize.INTEGER,
    date: Sequelize.DATE,
  });

  const SSTest = db.define('ssTest', {
    name: Sequelize.STRING(32),
    grade: Sequelize.INTEGER,
    date: Sequelize.DATE,
  });


// ASSOCIATIONS

User.hasMany(Student);
Student.belongsTo(User);

Student.hasMany(MathTest);
MathTest.belongsTo(Student);

Student.hasMany(ElaTest);
ElaTest.belongsTo(Student);

Student.hasMany(SSTest);
SSTest.belongsTo(Student);

// House.belongsToMany(Color, { through: 'house_color_xref'});
// Color.belongsToMany(House, { through: 'house_color_xref'});


module.exports = {
  User,
  Student,
  MathTest,
  ElaTest,
  SSTest,
  db,
};