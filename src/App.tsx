import React from 'react';
import UseState from '@/components/UseState';
import ClassState from '@/components/ClassState';

const App = ():React.ReactElement => 
   (
    <div className='w-100 h-[100vh] flex items-center justify-center'>
      <UseState />
      <ClassState />
    </div>
  );


export default App;