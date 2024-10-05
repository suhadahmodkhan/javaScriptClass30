import { createContext, useState } from "react"

export const CounterContext = createContext()

const Counter= ({children}) => {
    const [count ,setCount] = useState(0)
    const [ provCount , setProvCount ] = useState('nothing')
    console.log(provCount, count)
const info={
provCount,
setProvCount
}
return <CounterContext.Provider value={info}>{children}</CounterContext.Provider>


}
export default Counter ;