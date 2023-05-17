import React from 'react';
import {TYPES, globalState} from '../models/globalState'
type props = {
  name: string;
};

const SECURITY_CODE = 'asdf123';

const UseReducer: React.FC<props> = ({ name }): React.ReactElement => {
 
    const initialState: globalState = {
      value: '',
      error: false,
      loading: false,
      delete: false,
      confirmed: false
    };


    const reducerObject = (state, payload?) => ({
      [TYPES.CONFIRM]: { ...state, error: false, loading: false, confirmed: true },
      [TYPES.ERROR]: { ...state, loading: false, error: true },
      [TYPES.WRITE]: { ...state, value: payload },
      [TYPES.CHECK]: { ...state, loading: true },
      [TYPES.DELETE]: { ...state, delete: true },
      [TYPES.RESET]: { ...state, delete: false, confirmed: false, value: '' }
    });

    const reducer = (state, action) => {
      if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type];
      } else {
        return state;
      }
    };
  
   const [state, dispatch] = React.useReducer(reducer, initialState);

const onConfirm = () => { dispatch({type:TYPES.CONFIRM})};
const onError = () => { dispatch({ type: TYPES.ERROR }) };
const onWrite = ({target:{value}}) => { dispatch({ type: TYPES.WRITE, payload:value})};
const onCkeck = () => {dispatch({ type: TYPES.CHECK })};
const onDelete = () => {dispatch({ type: TYPES.DELETE })};
const onReset = () => {dispatch({ type: TYPES.RESET })};

  React.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          onConfirm()
        } else {
          onError()
        }
      }, 3000);
    }
  }, [state.loading]);

  if (!state.delete && !state.confirmed) {
    return (
      <div className="border w-full h-[50vh] flex flex-col items-center justify-center space-y-6">
        <h2 className="text-5xl">Eliminar {name}</h2>
        <p className="text-xl">escribe tu codigo de seguridad</p>
        <form onSubmit={(e) => e.preventDefault()}>
          {state.error && !state.loading && <p className="text-red-500">wrong code</p>}
          {state.loading && <p className="text-red-500">cargando</p>}
          <div>
            <input
              type="text"
              placeholder="secure code"
              value={state.value}
              onChange={onWrite}
              className="border border-gray-400 shadow py-2 px-10 rounded-2xl mr-7"
            />
            <button
              onClick={onCkeck}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              comprobar
            </button>
          </div>
        </form>
      </div>
    );
  } else if (state.confirmed && !state.delete) {
    return (
      <div className="border w-full h-[50vh] flex flex-col items-center justify-center space-y-6">
        <p>Quieres Eliminar el estado?</p>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={onDelete}
        >
          yes
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={onReset}
        >
          No
        </button>
      </div>
    );
  } else {
    return (
      <div className="border w-full h-[50vh] flex flex-col items-center justify-center space-y-6">
        <h2 className="text-5xl">Estado Eliminado con Exito</h2>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={onReset}
        >
          Retornar estado
        </button>
      </div>
    );
  }
};

export default UseReducer;

