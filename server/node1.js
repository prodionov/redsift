/**
 * Email3 Sift. DAG's 'Node1' node implementation
 */
"use strict";
let textUtils = require("@redsift/text-utilities");
// Entry point for DAG node
// got ={
//   in: ... // contains the key/value pairs that match the given query
//   with: ... // key/value pairs selected based on the with selection
//   lookup: ... // an array with result of lookup for a specific key
//   query: ... // an array containing the key hierarchy
// }
// for more info have a look at:
// http://docs.redsift.com/docs/server-code-implementation
module.exports = function(got) {
  const inData = got.in;

  console.log("email3: node1.js: data received:", inData.data);

  const json = inData.data.map(d => JSON.parse(d.value));
  const others = json;

  others.map(value => {
    let text = value.textBody || value.strippedHtmlBody || "";
    return text;
  });
  json.forEach(function(value, i) {
    console.log("datum#", i, "value:", value);
  });

  let counts = others.map(value => {
    let text = value.textBody || value.strippedHtmlBody || "";
    let count = textUtils.splitWords(textUtils.trimEmailThreads(text)).length;
    return {
      key: "word_count",
      value: count
    };
  });

  console.log("counter node.js: will output:", counts);
  return counts;
};
