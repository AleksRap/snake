export enum Theme {
  dark = 'dark',
  light = 'light',
}

export interface MeState {
  theme: Theme,
}

export interface MeChangeTheme {
  theme: Theme,
}
