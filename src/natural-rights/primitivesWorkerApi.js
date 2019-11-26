export default function primitivesWorkerApi(worker) {
    return {
        cryptKeyGen() {
            return new Promise((res, err) => {
                worker.postMessage({ type:"encryptionKeyPair" })
                worker.onmessage = function(e) {
                    res(e.data)
                }
            });
        },
        signKeyGen() {
            return new Promise((res, err) => {
                worker.postMessage({ type:"signatureKeyPair" })
                console.log('[MAIN]', 'postMessage')
                worker.onmessage = function(e) {
                    res(e.data)
                }
            });
        },
        cryptTransformKeyGen(fromKeyPair, toPubKey, signKeyPair) {
            return new Promise((res, err) => {
                worker.postMessage({
                    type:"cryptTransformKeys",
                    encryptPrivKey:fromKeyPair.privKey,
                    encryptPubKey:fromKeyPair.pubKey,
                    signPrivKey:signKeyPair.privKey,
                    signPubKey:signKeyPair.pubKey,
                    toPublicKey:toPubKey,
                })
                worker.onmessage = function(e) {
                    res(e.data)
                }
            });
        },
        encrypt(fromPublicKey, fromPlainText, fromSignKeyPair) {
            return new Promise((res, err) => {
                worker.postMessage({
                    type:"encrypt",
                    encryptPubKey:fromPublicKey,
                    plaintext:fromPlainText,
                    signPrivKey:fromSignKeyPair.privKey,
                    signPubKey:fromSignKeyPair.pubKey,
                })
                worker.onmessage = function(e) {
                    res(e.data)
                }
            });
        },
        decrypt(decryptKeyPair, ciphertext) {
            return new Promise((res, err) => {
                worker.postMessage({
                    type:"decrypt",
                    decryptPrivKey:decryptKeyPair.privKey,
                    decryptPubKey:decryptKeyPair.pubKey,
                    decryptCiphertext:ciphertext
                })
                worker.onmessage = function(e) {
                    res(e.data)
                }
            });                
        },
        cryptTransform(transformKey, ciphertext, signKeyPair) {
            return new Promise((res, err) => {
                worker.postMessage({
                    type:"cryptTransform",
                    transformKey:transformKey,
                    transCiphertext:ciphertext,
                    transSignPrivKey:signKeyPair.privKey,
                    transSignPubKey:signKeyPair.pubKey
                })
                    
                worker.onmessage = function(e) {
                    res(e.data)
                }
            });              
        },
        sign(signKeyPair, signtext) {
            return new Promise((res, err) => {
                worker.postMessage({
                    type:"sign",
                    signPrivKey:signKeyPair.privKey,
                    signPubKey:signKeyPair.pubKey,
                    signtext:signtext
                })
                worker.onmessage = function(e) {
                    res(e.data)
                }
            });              
        },
        verify(signPubKey, signature, signtext) {
            return new Promise((res, err) => {
                worker.postMessage({
                    type:"verify",
                    signPubKey:signPubKey,
                    signature:signature,
                    signtext:signtext
                })
                worker.onmessage = function(e) {
                    const booleanSwitch = e.data == "true";
                    res(booleanSwitch)
                }
            });              
        },
        test() {
            return new Promise((res, err) => {
                worker.postMessage({ "type":"testTransformKey" })
                worker.onmessage = function(e) {
                    res(e.data)
                }
            });
        }
    }
}
