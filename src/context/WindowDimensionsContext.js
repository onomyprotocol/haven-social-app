// Temporary Context for Window Dimensions

import React, { createContext, useContext, useState, useEffect } from 'react'

const WindowDimensionsContext = createContext(null)

const WindowDimensionsProvider = ({ children }) => {
    const [dimensions, setDimensions] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
    useEffect(() => {
      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
      window.addEventListener('resize', handleResize)
      return () => { window.removeEventListener('resize', handleResize) }
    }, [])
    return (
      <WindowDimensionsContext.Provider value={dimensions}>
        {children}
      </WindowDimensionsContext.Provider>
    )
  }
  export default WindowDimensionsProvider
  export const useWindowDimensions = () => useContext(WindowDimensionsContext)