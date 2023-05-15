import React from 'react';

class Loading extends React.Component {
  componentWillUnmount(): void {
    console.log('hola 2');
  }
  render() {
    return <p className="text-red-500">Cargando...</p>;
  }
}
export default Loading;
