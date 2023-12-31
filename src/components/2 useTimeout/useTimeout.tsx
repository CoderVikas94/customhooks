import{ useCallback, useEffect, useRef } from 'react'

const useTimeout = (callback:()=>void, delay:number) => {
    const callbackRef:any = useRef(callback)
    const timeoutRef:any = useRef()

    useEffect(() => {
        callbackRef.current = callback
      }, [callback])
    
      const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
      }, [delay])

      const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current)
      }, [])

      useEffect(() => {
        set()
        return clear
      }, [delay, set, clear])

      const reset = useCallback(() => {
        clear()
        set()
      }, [clear, set])
    



    return { reset, clear }
}

export default useTimeout