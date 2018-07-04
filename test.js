let { assert } = require("chai");
let oemd = require("./index");

describe("object-extend-missing-deep", function() {

  it("simple objects", function() {
    let obj1 = {
      a: "a",
      b: "b"
    };

    let obj2 = {
      a: "a_new",
      b: "b_new",
      c: "c_new"
    };

    assert.deepEqual(oemd(obj1, obj2), {
      a: "a",
      b: "b",
      c: "c_new"
    })
  });

  it("deep objects", function() {
    let obj1 = {
      a: "a",
      b: "b",
      c: {
        c1: "c1"
      }
    };

    let obj2 = {
      a: "a_new",
      b: "b_new",
      c: {
        c1: "c1_new",
        c2: "c2_new"
      }
    };

    assert.deepEqual(oemd(obj1, obj2), {
      a: "a",
      b: "b",
      c: {
        c1: "c1",
        c2: "c2_new"
      }
    })
  });

  it("objects with array", function() {
    let obj1 = {
      a: "a",
      b: "b",
      c: [
        { c1_arr: "c1" }
      ]
    };

    let obj2 = {
      a: "a_new",
      b: "b_new",
      c: [
        { c1_arr: "c1_arr_new", c2_arr: "c2_arr_new" },
        { c1_arr: "c3_arr_new", c2_arr: "c4_arr_new" }
      ]
    };

    assert.deepEqual(oemd(obj1, obj2), {
      a: "a",
      b: "b",
      c: [
        { c1_arr: "c1", c2_arr: "c2_arr_new" },
        { c1_arr: "c3_arr_new", c2_arr: "c4_arr_new" }
      ]
    })
  });
})
