import info from './info';
import servers from './servers';
import components from './components';
import tags from './tags';
// import auth from './paths/auth';

export default {
  openapi: '3.0.3', // present supported openapi version
  info,
  servers,
  components,
  tags,
  //   paths: {
  //     ...auth,
  //   },
};
