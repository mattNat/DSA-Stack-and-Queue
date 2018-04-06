const Stack = require('./stack-lesson');

function display(stack) {
  let currNode = stack.top;
  // console.log('stack TOP:', stack.top);
  // console.log(stack);

  if (currNode == null) {
    console.log('Stack Empty');
  }

  while (currNode !== null) {
    console.log(`${currNode.data}`);
    currNode = currNode.next;
  }
}

function peak(stack) {
  let currNode = stack.top;
  console.log('TOP:', currNode.data);
}

module.exports = { display, peak };