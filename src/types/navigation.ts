export type RootTabParamList = {
  Home: {
    message?: string;
    user?: string;
  };
  Login: {
    redirectTo?: string;
  };
  Register: {
    email?: string;
  };
};
