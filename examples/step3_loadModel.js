var w2v = require("../lib/main.js");

w2v.loadModel("../src/vectors.txt", function(err, model){
  console.log(model);
  var wordVecs = model.getVectors(["king","queen","boy","girl"]);
  console.log(wordVecs);
  var similar = model.mostSimilar("switzerland", 20);
  console.log(similar);
  var analogy = model.analogy("woman",["man","king"], 10);
  console.log(analogy);
  var similarity = model.similarity("king","queen");
  console.log(similarity);
});
