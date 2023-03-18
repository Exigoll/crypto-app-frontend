export interface IPropsLogin {
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  navigate: (to: string) => void;
}

export interface IPropsRegister extends IPropsLogin {
  setRepeatPassword: (value: string) => void;
  setFirstName: (value: string) => void;
  setUserName: (value: string) => void;
}

export interface IAuthState {
  user: {};
  isLogged: boolean;
}

interface IPublicUser {
  id: number | null;
  email: string;
  firstName: string;
  userName: string;
  createdAt: string;
  updatedAt: string;
  watchlist: [IWatchlist];
}

interface IWatchlist {
  id: number | null;
  name: string;
  assetId: string;
  createdAt: string;
  updatedAt: string;
  user: number | null;
}
