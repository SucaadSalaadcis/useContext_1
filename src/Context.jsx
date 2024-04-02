import React,{createContext} from 'react'

// 1. create context , is object wxuna leyayahay provider , provider ka wuxu qadana prop value
const ColorContext = createContext(); // color kan wxa raba ina ka istimalo component walbo
// provider : means ku dar  / melkasto qimahan urabo ina siiyo / another component
console.log(ColorContext.Provider);  


// create provuder
const UseContextProvider = ({children}) =>  {
  return (
    <ColorContext.Provider value="white">
    {children}
    </ColorContext.Provider>
  )
}


// export context to use , provider to wrap all component
export {UseContextProvider, ColorContext}; 