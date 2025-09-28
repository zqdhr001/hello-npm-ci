const assert = require("assert");
const { greet } = require("./index");

assert.strictEqual(greet("Alice"), "Hello, Alice!");
assert.strictEqual(greet(), "Hello, world!");

console.log("All tests passed ✅");
