async function test(title, callback) {
  try {
    await callback();
    console.log(`\x1b[92m✓ ${title}\x1b[0m`);
  } catch (error) {
    console.error(`\x1b[91m✕ ${title}\x1b[0m`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },

    toBeGreaterThan(expected) {
      if (actual <= expected) {
        throw new Error(`${actual} is lesser or equal to ${expected}`);
      }
    },

    toBeGreaterThanOrEqual(expected) {
      if (actual < expected) {
        throw new Error(`${actual} is lesser to ${expected}`);
      }
    },
  };
}

global.test = test;
global.expect = expect;

module.exports = { test, expect };
