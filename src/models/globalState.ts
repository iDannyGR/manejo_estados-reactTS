export interface globalState {
  value: string;
  error: boolean;
  loading: boolean;
  delete: boolean;
  confirmed: boolean;
}

 export enum TYPES {
      CONFIRM = 'CONFIRM',
      ERROR = 'ERROR',
      WRITE = 'WRITE',
      CHECK = 'CHECK',
      DELETE = 'DELETE',
      RESET = 'RESET'
    }

