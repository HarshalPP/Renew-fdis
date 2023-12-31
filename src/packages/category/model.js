import { DataTypes } from 'sequelize'
import { dbConfig } from '../../init/db'
import { UserClientSeq , FormSeq } from '../../models'

const CategorySeqFactory = () => {
  return dbConfig.define(
    'Categories',
    {
      ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      CategoryNameAbv: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      IsFixed: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      CategoryName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      SortOrder: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      tableName: 'Categories',
      defaultScope: {
        order: [['CategoryName', 'ASC']]
      }

    },
  )
}

const CategorySeq = CategorySeqFactory()

setTimeout(()=>{
 CategorySeq.hasMany(FormSeq,{
  as:'Forms',
  foreignKey:'CategoryId'
 })

},0)

setTimeout(() => {
  
  CategorySeq.belongsToMany(UserClientSeq, {
    through: 'Client_Category',
    as: 'UserClient',
    foreignKey: 'CategoryId',
    timestamps: false
  });
  UserClientSeq.belongsToMany(CategorySeq, {
    through: 'Client_Category',
    as: 'Category',
    foreignKey: 'ClientId',
    timestamps: false
  });
}, 0)



export default CategorySeq
