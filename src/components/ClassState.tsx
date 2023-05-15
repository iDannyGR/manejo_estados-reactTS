import React from 'react';
import Loading from './Loading';

class ClasState extends React.Component {
  state = { error: false, loading: false };

  componentDidUpdate(): void {
    console.log('DidUpdate');
   
    if (this.state.loading) {
      setTimeout(() => {
        console.log('start validation');

        this.setState({loading:false});

        console.log('end validation');
      }, 3000);
    }
  }

  render() {
    const { name } = this.props;
    const { error, loading } = this.state;

    return (
      <div className="border w-full h-[50vh] flex flex-col items-center justify-center space-y-6">
        <h2 className="text-5xl">Eliminar {name}</h2>
        <p className="text-xl">escribe tu codigo de seguridad</p>
        <form onSubmit={(e) => e.preventDefault()}>
          {error && <p className="text-red-500">wrong code</p>}
          {loading && <Loading />}
          <div>
            <input
              type="text"
              placeholder="secure code"
              className="border border-gray-400 shadow py-2 px-10 rounded-2xl mr-7"
            />
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              onClick={() => this.setState({ loading: true })}
            >
              comprobar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default ClasState;