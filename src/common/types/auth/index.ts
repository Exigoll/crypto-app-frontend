import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface IPropsLogin<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> {
  navigate: (to: string) => void;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  loading: boolean;
}

export interface IPropsRegister extends IPropsLogin {}

export interface IAuthState {
  user: {
    user: IPublicUser;
    token: string;
  };
  isLogged: boolean;
  isLoading: boolean;
}

export interface IPublicUser {
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

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData extends ILoginData {
  firstName: string;
  userName: string;
}
