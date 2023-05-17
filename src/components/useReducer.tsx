import React from 'react';

type props = {
  name: string;
};
interface globalState {
  value: string;
  error: boolean;
  loading: boolean;
  delete: boolean;
  confirmed: boolean;
}
const SECURITY_CODE = 'asdf123';

const UseReducer: React.FC<props> = ({ name }): React.ReactElement => {
 
    const initialState: globalState = {
      value: 'paradigma',
      error: false,
      loading: false,
      delete: false,
      confirmed: false
    };

    const reducerObject = (state, payload?) => ({
      CONFIRM: { ...state, error: false, loading: false, confirmed: true },
      ERROR: { ...state, loading: false, error: true },
      WRITE: { ...state, value: payload },
      CHECK: { ...state, loading: true },
      DELETE: { ...state, delete: true },
      RESET: { ...state, delete: false, confirmed: false, value: '' }
    });

    const reducer = (state, action) => {
      if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type];
      } else {
        return state;
      }
    };
  
   const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          dispatch({
            type: 'CONFIRM'
          });
        } else {
          dispatch({
            type: 'ERROR'
          });
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
              onChange={(e) => dispatch({
                type:'WRITE', payload: e.target.value 
              })}
              className="border border-gray-400 shadow py-2 px-10 rounded-2xl mr-7"
            />
            <button
              onClick={() => dispatch({type:'CHECK'})}
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
          onClick={() => dispatch({type:'DELETE'})}
        >
          yes
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => dispatch({type:'RESET'})}
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
          onClick={() => dispatch({type:'RESET'})}
        >
          Retornar estado
        </button>
      </div>
    );
  }
};

export default UseReducer;

