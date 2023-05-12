import React from 'react';
import UseState from '@/components/UseState';
import ClassState from '@/components/ClassState';

const App = (): React.ReactElement => (
  <div className="w-100 h-[100vh] flex flex-col items-center text-center">
    <UseState name={'Use State'} />
    <ClassState name={'Class State'} />
  </div>
);


export default App;