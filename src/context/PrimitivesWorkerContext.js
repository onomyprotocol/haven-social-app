import React from 'react'

const PrimitivesWorkerContext = React.createContext()

function PrimitivesWorkerProvider({children}) {
    
    const primitivesWorker = new Worker('./worker.bundle.js')

    return (
        <PrimitivesWorkerContext.Provider value={primitivesWorker}>
            {children}
        </PrimitivesWorkerContext.Provider>
    )
}

function usePrimitivesWorker() {
    const context = React.useContext(PrimitivesWorkerContext)
    if (context === undefined) {
        throw new Error('useAccountsState must be used within an AccountsProvider')
    }
    return context
}

export {PrimitivesWorkerProvider, usePrimitivesWorker}
