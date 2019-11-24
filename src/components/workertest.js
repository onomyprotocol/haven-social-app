import React from 'react';

// Import button component
import { usePrimitivesWorker } from '../context/PrimitivesWorkerContext';

// Simple counter using React Hooks
const WorkerTest = () => {
    const worker = usePrimitivesWorker()
    worker.onmessage = function onMessage(e) {
        console.log('[MAIN]', e.data);
    };
    
    worker.postMessage({
        hello: 111,
    });

	return (
		<>
			<p>Primitives Worker Test</p>
		</>
	);
};

export default WorkerTest;
