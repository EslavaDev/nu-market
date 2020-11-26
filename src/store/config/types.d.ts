/**
 * CONFIG REDUCER ACTIONS TO BE DISPATCHED
 */
type ConfigActions =
  | { type: '@@CONFIG/LOAD' }
  | {
      type: '@@CONFIG/LOAD_DONE';
      payload: Record<string, string | number | boolean>;
    }
  | { type: '@@CONFIG/LOAD_FAILED'; error?: string }
  | {
      type: '@@CONFIG/SET_PROPERTY';
      payload: Record<string, string | number | boolean>;
    };
/**
 * CONFIG REDUX STATE
 */
interface ConfigState {
  loading: boolean;
  token: string;
  enviromentUrl: string;
}
