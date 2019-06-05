import getClassName from "../get-class-name";

export default function parseMedia(obj: { [key: string]: any }) {
  const key = Object.keys(obj)[0];
  const name = Object.keys(obj[key])[0];
  const className = getClassName({ className: obj[key][name], jsName: name, complexValue: true }, key[0]);
  const value: string = obj[key][name];

  return { key, name, value, className };
}
