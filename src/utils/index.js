export function getCount (count = 0) {
  count = count - 0
  const w = 10000
  return count < w ? count : 
    count / w < w ? `${Math.floor(count / (w / 10)) / 10}万` :
      `${Math.floor(count / (w * w / 10)) / 10}亿`
}
