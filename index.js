const jwt = require("jsonwebtoken");
const jwtPassword = "randomshit";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);
// Sigin Function
function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);

  const passwordResponse = passwordSchema.safeParse(password);

  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }

  const signature = jwt.sign(
    {
      username,
    },
    jwtPassword,
  );

  return signature;
}

const ans = signJwt("parbhat@gmail.com", "abcdcansdnajs");
console.log(ans);

// Decode Function
function decodeJwt(token) {
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}
console.log(decodeJwt("damskl"));

// Verify Function
function verifyJwt(token) {
  let ans = true;
  try {
    jwt.verify(token, jwtPassword);

  } catch (e) {
    ans = false;
  }
  return ans;
}
console.log(verifyJwt("adsda"));