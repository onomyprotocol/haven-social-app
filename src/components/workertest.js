import React, {useEffect, useState} from 'react';
import primitivesWorkerApi from '../natural-rights/primitivesWorkerApi'

// Import primitives worker
import { usePrimitivesWorker } from '../context/PrimitivesWorkerContext';

// Simple worker test
const WorkerTest = () => {
    const [workerMounted, updateWorkerMounted] = useState(false)
    const worker = usePrimitivesWorker()
    const primitivesWorker = primitivesWorkerApi(worker)
    
    async function workerTry() {
        const signKey = await primitivesWorker.signKeyGen()
        console.log('[MAIN]', 'signKey', signKey)
        const cryptKey = await primitivesWorker.cryptKeyGen()
        console.log('[MAIN]', 'cryptKey', cryptKey)
    }

    worker.onmessage = function(message) {
        console.log('[MAIN]', message.data)
        if(workerMounted == false) {
            updateWorkerMounted(true)
        }
    } 

    useEffect(() => {
        if(workerMounted == true) {
            workerTry()
        }
    }, [workerMounted])
    

    /**
    worker.onmessage = function onMessage(e) {
        console.log('[MAIN]', e.data);
    };
    */
    
    /**
    
    worker.postMessage({
        hello: 111,
    });
    */

	return (
		<>
			<p>Primitives Worker Test</p>
		</>
	);
};

export default WorkerTest;
