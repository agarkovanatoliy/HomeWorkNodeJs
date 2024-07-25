function generatePassword() {
  const length = 10,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@-#$";
  let retVal = "";
  const n = charset.length;
  for (let i = 0; i < length; i++) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

module.export = { generatePassword };