const queue = [];

function addToQueue(action) {
  queue.push(action);
}

function getNextJob() {
  return queue.shift();
}

module.exports = { addToQueue, getNextJob };