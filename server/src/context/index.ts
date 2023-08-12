export const context = async (req: any) => {
  // process token, authenticate user and attach it to your graphql context
  const userId = ''; // await getUserFromCookies(req.headers.cookie);
  // or
  //   const userId = await getUserFromAuthorizationHeader(
  //     req.headers.authorization
  //   );

  // respond with 401 if the user was not authenticated
  if (!userId) {
    return [null, { status: 401, statusText: 'Unauthorized' }];
  }

  // otherwise attach the user to the graphql context
  return { userId };
};
