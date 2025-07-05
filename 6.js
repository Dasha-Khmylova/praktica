/*Write a function, which takes a non-negative integer (seconds) as 
input and returns the time in a human-readable format (HH:MM:SS)
*/
function humanReadable(seconds) {
  if (seconds < 0 || seconds > 359999) return "Число должно быть в диапазоне 0-359999";

  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const secs = remainingSeconds % 60;

  const pad = (num) => num.toString().padStart(2, '0');

  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

console.log(humanReadable(359999));
console.log(humanReadable(0));
console.log(humanReadable(-3));