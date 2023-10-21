import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  TalentSignup,
  CodeVerification,
  ClientSignUp,
  SignIn,
} from './pages/auth';
import { MyJobs, Overview, Profile, Quizzes } from './pages/talent';
import { Home, JobDetails, Jobs, Privacy, Terms } from './pages/root';
import PrivateRoute from './pages/PrivateRoute';
import { RoleType } from './types';
import DashboardLayout from './components/layout/DashboardLayout/DashboardLayout';
import { PushNotification } from './components/ui';

const AdminOverview = lazy(() => import('./pages/admin/Overview/Overview'));
const AdminCompanies = lazy(() => import('./pages/admin/Companies/Companies'));
const AdminTalents = lazy(() => import('./pages/admin/Talents/Talents'));
const AdminTechStacks = lazy(
  () => import('./pages/admin/TechStacks/TechStacks')
);
const AdminTechnologies = lazy(
  () => import('./pages/admin/Technologies/Technologies')
);
const AdminQuizzes = lazy(() => import('./pages/admin/Challenges/Challenges'));
const AdminRoles = lazy(() => import('./pages/admin/Roles/Roles'));
const AdminUsers = lazy(() => import('./pages/admin/Users/Users'));

const Companies = lazy(() => import('./pages/company/Companies/Companies'));
const CompanyDetails = lazy(
  () => import('./pages/company/CompanyDetails/CompanyDetails')
);
const CompanyJobs = lazy(
  () => import('./pages/company/CompanyJobs/CompanyJobs')
);
const Challenges = lazy(
  () => import('./pages/challenge/Challenges/Challenges')
);

const Technologies = lazy(
  () => import('./pages/challenge/Technologies/Technologies')
);

const Technology = lazy(
  () => import('./pages/challenge/Technology/Technology')
);

function App() {
  return (
    <>
      <PushNotification />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/jobs/:slug" component={JobDetails} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/client/signup" component={ClientSignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/talent/signup" component={TalentSignup} />
        <Route path="/talent/code-verification" component={CodeVerification} />

        <Suspense fallback={<p>Loading ...</p>}>
          <Route path="/companies/:slug/jobs" component={CompanyJobs} />
          <Route exact path="/companies/:slug" component={CompanyDetails} />
          <Route exact path="/companies" component={Companies} />

          <Route path="/challenges/:slug/technology" component={Technology} />
          <Route exact path="/challenges/:slug" component={Technologies} />
          <Route exact path="/challenges" component={Challenges} />

          <PrivateRoute
            roles={[RoleType.TALENT]}
            path="/talent/find-a-job"
            component={MyJobs}
          />
          <PrivateRoute
            roles={[RoleType.TALENT]}
            path="/talent/my-jobs"
            component={MyJobs}
          />
          <PrivateRoute
            roles={[RoleType.TALENT]}
            path="/talent/quizzes"
            component={Quizzes}
          />
          <PrivateRoute
            roles={[RoleType.TALENT]}
            path="/talent/profile"
            component={Profile}
          />
          <PrivateRoute
            roles={[RoleType.TALENT]}
            path="/talent/challenges"
            component={Challenges}
          />
          <PrivateRoute
            exact
            roles={[RoleType.TALENT]}
            path="/talent"
            component={Overview}
          />

          <PrivateRoute
            roles={[RoleType.ADMIN]}
            path="/admin/users"
            component={AdminUsers}
          />

          <PrivateRoute
            roles={[RoleType.ADMIN]}
            path="/admin/roles"
            component={AdminRoles}
          />

          <DashboardLayout>
            <PrivateRoute
              roles={[RoleType.ADMIN]}
              path="/admin/technologies"
              component={AdminTechnologies}
            />

            <PrivateRoute
              roles={[RoleType.ADMIN]}
              path="/admin/tech-stacks"
              component={AdminTechStacks}
            />

            <PrivateRoute
              roles={[RoleType.ADMIN]}
              path="/admin/talents"
              component={AdminTalents}
            />
            <PrivateRoute
              roles={[RoleType.ADMIN]}
              path="/admin/companies"
              component={AdminCompanies}
            />
            <PrivateRoute
              exact
              roles={[RoleType.ADMIN]}
              path="/admin"
              component={AdminOverview}
            />
          </DashboardLayout>
        </Suspense>
      </Switch>
    </>
  );
}

export default App;
