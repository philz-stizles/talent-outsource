import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import CompanyType from './company_type';

const JobType: GraphQLObjectType = new GraphQLObjectType({
  name: 'JobType',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    company: { type: CompanyType, resolve() {} },
  }),
});

export default JobType;
