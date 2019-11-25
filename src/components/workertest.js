import React, {useEffect, useState} from 'react';

// Import primitives worker
import { usePrimitivesWorker } from '../context/PrimitivesWorkerContext';

// Simple counter using React Hooks
const WorkerTest = () => {
    const [workerMounted, updateWorkerMounted] = useState(false)
    const worker = usePrimitivesWorker()
    
    function workerTry() {
        return new Promise((res, err) => {
            worker.postMessage({
                type: "signatureKeyPair",
            })
            worker.onmessage = function (e) {
                res(console.log('[MAIN]', e.data))
            }
        });
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
