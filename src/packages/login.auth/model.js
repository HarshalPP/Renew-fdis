// import { DataTypes } from 'sequelize'
// import { dbConfig } from '../../init/db'
// import { SuperUserSeq,CountrySeq, AuditSeq, BranchSeq, UserSeq } from '../../models'

// const UserClientSeqFactory = () => {
//   return dbConfig.define(
//     'aspnet_Membership',
//     { 
//       ApplicationId:{
//       // primaryKey: true,
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4

//     },
//       UserId: {
//         primaryKey: true,
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4
//       },
//       Password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       PasswordFormat: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },

//       PasswordSalt: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       MobilePIN: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },

//       Email: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },

//       LoweredEmail: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },

//       PasswordQuestion: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       PasswordAnswer: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       IsApproved: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       IsLockedOut: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       CreateDate: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       LastLoginDate: {
//         type: DataTypes.DATE(3),
//         allowNull: true,
//       },
//       LastPasswordChangedDate: {
//         type: DataTypes.DATE(3),
//         allowNull: true,
//       },
//       LastLockoutDate: {
//         type: DataTypes.DATE(3),
//         allowNull: true,
//       },
//       FailedPasswordAttemptCount: {
//         type: DataTypes.INTEGER,
//         allowNull: true,
//       },
//       FailedPasswordAttemptWindowStart: {
//         type: DataTypes.DATE(3),
//         allowNull: true,
//       },
//       FailedPasswordAnswerAttemptCount: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       FailedPasswordAnswerAttemptWindowStart:
//       {
//         type: DataTypes.DATE(3),
//         allowNull: false,
//       },
//       Comment:
//       { type: DataTypes.STRING,
//         allowNull: true,
//       }
//     },
//     {
//       timestamps: false,
//       tableName: 'aspnet_Membership'
//     },
//   )
// }

// const SuperUser = UserClientSeqFactory()

// setTimeout(() => {
//   SuperUser.belongsTo(SuperUserSeq, {
//     as: 'aspnet_Users',
//     foreignKey: 'UserId'
//   })

//   SuperUser.belongsTo(BranchSeq, {
//     as: 'aspnet_Profile',
//     foreignKey: 'UserId'
//   })

// }, 0)

// export default SuperUser


import { DataTypes, STRING, Sequelize } from "sequelize";
import { dbConfig } from '../../init/db'

const UserClientSeqFactory = () => {
  return dbConfig.define(
    'KPI-QUESTIONS',
    {

      Id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },

      KPI: {
        type: DataTypes.STRING,
        allowNull: true
      }
      
    },
    {
      timestamps: false,
      tableName: 'KPI-QUESTIONS'
    },
  )
}

const SuperUser = UserClientSeqFactory()

export default SuperUser

