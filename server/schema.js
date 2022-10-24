const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require('graphql')
const faker = require('faker')
const userData = require("./casual_mock")

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    address: {type: GraphQLString},
    email: {type: GraphQLString},
    phonenumber: {type: GraphQLString}
  })
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      users: {
        type: new GraphQLList(UserType),
        args: {
          start: {type: GraphQLInt},
          end: {type: GraphQLInt}
        },
        resolve(_parent, args) {
          return userData.filter((user) => user.id >= args.start && user.id < args.end )
          
        }
      }
    }
  })
})
