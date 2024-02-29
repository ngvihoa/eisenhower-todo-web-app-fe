export interface AuthState {
  isAuth: boolean;
  email: string;
  uid: string;
}

export interface InitialAuthState {
  value: AuthState;
}

export interface LoginType {
  email: string;
  id: string;
}

export type ActiveId = "p1" | "p2" | "p3" | "p4" | "all" | "about" | "setting";

export interface ActiveData {
  [key: string]: any;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  all: string;
  about: string;
  setting: string;
}
export interface ActiveState {
  id: ActiveId;
  name: string;
}

export interface InitialActiveState {
  value: ActiveState;
}

export interface MenuState {
  isOpen: boolean;
}

export interface InitialMenuState {
  value: MenuState;
}
