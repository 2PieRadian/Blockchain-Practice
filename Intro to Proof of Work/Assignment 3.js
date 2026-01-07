/*
    What if I ask you to find a nonce for the following input - 
        harkirat => Raman | Rs 100
        Ram => Ankit | Rs 10
*/

import crypto from "crypto";

function findNonce(prefix) {
  let x = 0;

  while (true) {
    let input =
      `harkirat => Raman | Rs 100
      Ram => Ankit | Rs 10` + x.toString();

    const hash = crypto.createHash("sha256").update(input).digest("hex");

    if (hash.startsWith(prefix)) {
      return { nonce: x, hash: hash };
    }

    x++;
  }
}

console.log(findNonce("00000"));
