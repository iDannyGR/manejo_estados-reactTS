import React from 'react';

type props = {
  name:string
}


const UseState:React.FC<props> = ({name}):React.ReactElement => {
    
  const [error, setError] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false)
  
  React.useEffect(() => {

    console.log('start effect')

      if(!!loading){ 
        setTimeout(()=>{
        console.log('start validation')
        
        setLoading(false)
        
        console.log('end validation')
      },5000)}
    
      console.log('end effect')

  }, [loading])
  
  return (
    <div className="border w-full h-[50vh] flex flex-col items-center justify-center space-y-6">
      <h2 className="text-5xl">Eliminar {name}</h2>
      <p className="text-xl">escribe tu codigo de seguridad</p>
      <form onSubmit={(e) => e.preventDefault()}>
        {error && <p className="text-red-500">wrong code</p>}
        {loading && <p className="text-red-500">cargando</p>}
        <div>
          <input
            type="text"
            placeholder="secure code"
            className="border border-gray-400 shadow py-2 px-10 rounded-2xl mr-7"
          />
          <button
            onClick={() => setLoading(true)}
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