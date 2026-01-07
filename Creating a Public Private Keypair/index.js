import * as ed from "@noble/ed25519";
import { sha512 } from "@noble/hashes/sha2.js";

ed.hashes.sha512 = sha512;

async function generateKeypair() {
  const privateKey = ed.utils.randomSecretKey();
  const publicKey = ed.getPublicKey(privateKey);

  const message = new TextEncoder().encode("Hello, World!");
  const signature = await ed.sign(message, privateKey);

  const isValid = await ed.verify(signature, message, publicKey);
  console.log(isValid);
}

generateKeypair();
