import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';
import JobType from './job_type';

const CompanyType: GraphQLObjectType = new GraphQLObjectType({
  name: 'CompanyType',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    jobs: { type: new GraphQLList(JobType), resolve() {} },
  }),
});

export default CompanyType;
