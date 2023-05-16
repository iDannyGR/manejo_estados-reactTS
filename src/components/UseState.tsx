import React from 'react';

type props = {
  name:string
}
interface globalState {
  value: string,
  error: boolean,
  loading:boolean,
  delete: boolean,
  confirmed: boolean
}
const SECURITY_CODE = "asdf123";

const UseState:React.FC<props> = ({name}):React.ReactElement => {
  const [state, setState] = React.useState<globalState>({
    value: '',
    error: false,
    loading: false,
    delete: false,
    confirmed: false
  })
const onConfirm = ()=>{
  setState({ ...state, error: false, loading: false, confirmed: true }); 
}
const onError = ()=>{
  setState({ ...state, loading: false, error: true });
}
const onWrite =(value:string)=>{
  setState({ ...state, value})
}
const onCkeck=()=>{
  setState({...state, loading:true})
}
const onDelete=()=>{
  setState({...state, delete:true})
}
const onReset=()=>{
  setState({...state, delete:false, confirmed:false, value:''})
}
  React.useEffect(() => {

      if(state.loading){

        setTimeout(()=>{
          
            if(state.value === SECURITY_CODE){
                onConfirm();
            }else{
              onError()
            }
        },3000)}
    
  }, [state.loading])
  
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
                onChange={(e) => onWrite(e.target.value)}
                className="border border-gray-400 shadow py-2 px-10 rounded-2xl mr-7"
              />
              <button
                onClick={() => onCkeck()}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                comprobar
              </button>
            </div>
          </form>
        </div>
      );
  }else if(state.confirmed && !state.delete){
    return(
      <div className="border w-full h-[50vh] flex flex-col items-center justify-center space-y-6">
        <p>Quieres Eliminar el estado?</p>
        <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={()=> onDelete()}
        >yes
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={()=> onReset() }
        >No
        </button>
      </div>
    );
  }else{
    return (
      <div className="border w-full h-[50vh] flex flex-col items-center justify-center space-y-6">
        <h2 className="text-5xl">Estado Eliminado con Exito</h2>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => onReset()}
        >
          Retornar estado
        </button>
      </div>
    );
  }
};

export default UseState;