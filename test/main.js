var assert = require("assert");
var main = require("../js/main");

/* global describe */
describe("Somme entre deux nombres", function() {
  /* global it */
  it("Doit retourner 15", function() {
    var a = 10;
    var b = 5;
    var result_somme = 15;

    assert.equal(main.somme(a, b), result_somme);
  });
});
