import React from 'react';

type props = {
  name:string
}


const UseState:React.FC<props> = ({name}):React.ReactElement => {
    
  const [error, setError] = React.useState<boolean>(false);
  
  return (
    <div className="border w-full h-[50vh] flex flex-col items-center justify-center space-y-6">
      <h2 className="text-5xl">Eliminar {name}</h2>
      <p className="text-xl">escribe tu codigo de seguridad</p>
      {error && <p className="text-red-500">wrong code</p>}
      <div>
        <input 
        type="text" 
        placeholder="secure code" 
        className="border border-gray-400 shadow py-2 px-10 rounded-2xl mr-7" />
        <button
          onClick={() => setError(!error)}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          comprobar
        </button>
      </div>
    </div>
  );
};

export default UseState;