import React from 'react';

type props = {
  name:string
}
interface globalState {
  value: string,
  error: boolean,
  loading:boolean
}
const SECURITY_CODE = "asdf123";

const UseState:React.FC<props> = ({name}):React.ReactElement => {
  const [state, setState] = React.useState<globalState>({
    value: '',
    error: false,
    loading: false
  })

  React.useEffect(() => {

      if(state.loading){ 
        setTimeout(()=>{
            if(state.value === SECURITY_CODE){
              //  setError(true); 
              setState({...state, error:false, loading:false})
              };
              // setLoading(false)
              setState({...state, loading:false, error:true})
        },3000)}
    
  }, [state.loading])
  
  return (
    <div className="border w-full h-[50vh] flex flex-col items-center justify-center space-y-6">
      <h2 className="text-5xl">Eliminar {name}</h2>
      <p className="text-xl">escribe tu codigo de seguridad</p>
      <form onSubmit={(e) => e.preventDefault()}>
        {(state.error && !state.loading ) && <p className="text-red-500">wrong code</p>}
        {state.loading && <p className="text-red-500">cargando</p>}
        <div>
          <input
            type="text"
            placeholder="secure code"
            value={state.value}
            onChange={ e => setState({...state, value: e.target.value}) }
            className="border border-gray-400 shadow py-2 px-10 rounded-2xl mr-7"
          />
          <button
            onClick={() => setState({...state, loading:true})}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            comprobar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UseState;