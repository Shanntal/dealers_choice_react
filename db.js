//models
//associations
//initial data
//new Sequelize

const Sequelize = require('sequelize')
const conn = new Sequelize('postgres://localhost:3000/student_profiles')


const Student_Profile = conn.define('student_profile', {
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.DataTypes.STRING,
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      validate: {
        isEmail: true,
      }
    },
    sports: {
        type: Sequelize.DataTypes.BLOB,
        allowNull: true
    },
    awards: {
        type: Sequelize.DataTypes.BLOB,
        allowNull: true
    },
    grade: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

const data = [
    {
        name: 'Shanntal Morel',
        phone: '917-803-0575',
        email: 'morelshanntal@gmail.com',
        sports: 'Tennis, Track & Field, Swimming',
        awards: 'Honor roll, Maths, Earth Science & Arista, Italian & Spanish Proficiency & Valedictorian',
        grade: '12th- Senior Year'
    },
    {
        name: 'Erick Velasco',
        phone: '646-678-8901',
        email: 'ecuadorianMan@gmail.com',
        sports: 'Volleyball',
        awards: 'Honor roll, Orangic Chemistry, English & Spanish Proficiency',
        grade: '11th- Junior Year'
    },
    {
        name: 'Andrew Vega',
        phone: '304-115-5665',
        email: 'excellZero@gmail.com',
        sports: 'Football',
        awards: 'Athletics',
        grade: '12th- Senior Year'
    },
    {
        name: 'Liz Abott',
        phone: '565-345-6789',
        email: 'lizgirl123@gmail.com',
        sports: 'Field Hockey',
        awards: null,
        grade: '9th- Freshman Year'
    }
]

const syncAndSeed = async() => {
    await conn.sync({ force: true });
    await Promise.all(data.map(student => Student_Profile.create(student))
    )
}

module.exports = {
    conn,
    syncAndSeed,
    models: {
            Student_Profile
    }
};