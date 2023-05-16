const initialState = {
      value: '',
    error: false,
    loading: false,
    delete: false,
    confirmed: false
};

// const reducer = (state, action) => {      
// }

const reducer1 = (state, action) =>{
    if(action.type === 'ERROR'){
        return {
            ...state, error:true, loading:false
        };
    }else if(action.type === 'CHECK'){
        return{
            ...state, loading:true
        }
    }else{
        return{...state}
    }
}

const reducerSwith = (state, action) =>{
    switch(action.type){
        case 'ERROR': return {
          ...state,
          error: true,
          loading: false
        };
        case 'CHECK' :return {
          ...state,
          loading: true
        };
        default: return {
            ...state
        }
    }
}

const reducerObject = (state) => ({
  'ERROR': {...state, error: true, loading: false },
  'CKECK': {...state, loading: false },

});

const reducer = (state, action) =>{
    if(reducerObject(state)[action.type]){
        return reducerObject(state)[action.type];
    }else{
        return state;
    }
}