export enum RequestStatus {
  INIT = 'INIT',
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  RESET = 'RESET',
}

export type UIState = Record<string, RequestStatus>;
