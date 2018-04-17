/**
 * Email3 Sift. DAG's 'Node1' node implementation
 */
"use strict";

const dkimResults = [
  "pass",
  "fail",
  "none",
  "policy",
  "neutral",
  "temperror",
  "permerror"
];
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

  const json = inData.data.map(d => JSON.parse(d.value));
  let { headers } = json[0];

  let spfRegexp = /spf=([^\s]+)/;
  let dkimRegexp = /dkim=([^\s]+)/;

  let results = json.map(value => {
    let { id, headers, from } = value;
    return {
      key: "email_output",
      value: {
        id,
        from,
        dkim:
          headers["Authentication-Results"].match(dkimRegexp)[1] === "pass"
            ? true
            : false,
        spf:
          headers["Authentication-Results"].match(spfRegexp)[1] === "pass"
            ? true
            : false
      }
    };
  });

  console.log("counter node.js: will output:", results);
  return results;
};
