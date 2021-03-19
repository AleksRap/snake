import { Action } from 'redux';

export type ActionFn<T, U> = (
  state: Readonly<T>,
  action: Action<string> & U
) => Readonly<T>;
