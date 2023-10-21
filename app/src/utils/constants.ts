export const baseUrl = process.env.REACT_APP_API_BASE_URL;
export const graphQlUri = process.env.REACT_APP_GRAPH_URL;
export const graphQlSubUrl = process.env.REACT_APP_GRAPH_SUBSCRIPTION_URL as string;
export const talentSignupUrl = `${baseUrl}/auth/talent-signup`;
export const clientSignupUrl = `${baseUrl}/auth/client-signup`;
export const verifyOtpUrl = `${baseUrl}/auth/verify-otp`;
export const verifyToken = `${baseUrl}/auth/verify-token`;
export const signinUrl = `${baseUrl}/auth/signin`;
export const firebaseMsgKey = process.env.FIREBASE_MESSAGING_KEY

// const envVars = {
//     firebaseMsgKey
// }

// export default envVars;
