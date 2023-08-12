import { GraphQLObjectType, GraphQLString } from 'graphql';

const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLString },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

export default UserType;
