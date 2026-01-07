/* What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?
 * Answer: You will have to brute force until you find a value that starts with 00000
 */

import crypto from "crypto";

function findHashWithPrefix(prefix) {
  let x = 0;

  while (true) {
    const hash = crypto.createHash("sha256").update(x.toString()).digest("hex");

    if (hash.startsWith(prefix)) {
      return { number: x, hash: hash };
    }

    x++;
  }
}

console.log(findHashWithPrefix("00000"));
