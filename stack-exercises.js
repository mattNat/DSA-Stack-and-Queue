const Stack = require('./stack-lesson');
const {display, peak} = require('./supplemental');
// let starTrek = new Stack();

function main() {
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  // console.log(JSON.stringify(starTrek));


  display(starTrek);
  peak(starTrek);
}
main();