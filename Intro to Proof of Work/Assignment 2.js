// What if I ask you that the input string should start with "100xDevs" ? How would the code change?

import crypto from "crypto";

function findHashWithPrefix(prefix) {
  let x = 0;

  while (true) {
    const input = "100xDevs" + x.toString();
    const hash = crypto.createHash("sha256").update(input).digest("hex");

    if (hash.startsWith(prefix)) {
      return { number: x, hash: hash };
    }

    x++;
  }
}

console.log(findHashWithPrefix("00000"));
