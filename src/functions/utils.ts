/* eslint-disable no-bitwise */
function hash(number: number): number {
  let result = 0;
  const string = String(number);

  for (let i = 0; i < string.length; i += 1) {
    const ch = string.charCodeAt(i);
    result = (result << 5) - result + ch;
    result &= result;
  }
  return result;
}

export default hash;
