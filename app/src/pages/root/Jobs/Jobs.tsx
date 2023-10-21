import { useQuery } from '@apollo/client';
import { GET_JOBS } from '../../../graphql/job';

const JobDetails = () => {
  // // Refetching enables you to refresh query results in response to a particular user action,
  // // as opposed to using a fixed interval.
  // const { loading, error, data, refetch } = useQuery(GET_JobDetails, {
  //   // fetchPolicy: 'network-only', // Used for first execution
  //   // nextFetchPolicy: 'cache-first', // Used for subsequent executions
  // });

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;
  return <div>JobDetails</div>;
};

export default JobDetails;
