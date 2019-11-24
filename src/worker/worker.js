const { TextEncoder, TextDecoder } = require('text-encoding-shim')
const textEncoder = new TextEncoder()
const textDecoder = new TextDecoder()
// const Recrypt = () => import('@ironcorelabs/recrypt-wasm-binding')

function postDecrypted(message) {
    self.postMessage(message)
}

async function recryptTest() {
    const Recrypt = await import('@ironcorelabs/recrypt-wasm-binding')
    console.log('[WORKER]', Recrypt)
    const Api256 = new Recrypt.Api256();
    //Generate both a user key pair and a signing key pair
    const keys = await Api256.generateKeyPair();
    console.log('[WORKER]', keys)
    const signingKeys = Api256.generateEd25519KeyPair();
    console.log('[WORKER]', signingKeys)

    //Generate a plaintext to encrypt
    const plaintext = "some plaintext";
    let padded = plaintext;
    while (padded.length < 384) padded += ' ';
    console.log('[WORKER]', plaintext)
    const uint8plaintext = textEncoder.encode(padded)
    //Encrypt the data to the public key and then attempt to decrypt with the private key
    const encryptedValue = Api256.encrypt(uint8plaintext, keys.publicKey, signingKeys.privateKey);
    // console.log('[WORKER]', encryptedValue)


    const result = Api256.decrypt(encryptedValue, keys.privateKey);
    const decryptedText = textDecoder.decode(result instanceof Buffer ? new Uint8Array(result) : result).trim()
    postDecrypted(decryptedText)
}

recryptTest();