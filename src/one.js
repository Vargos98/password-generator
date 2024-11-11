const obj = {

  "a": {

    "b": "1",

    "c": {

      "h": "1",

      "i": {

        "j": {

          "k": "1",

        },

      },

    },

  },

  "d": {

    "e": {

      "f": "1",

    },

    "g": "1",

  },

};
console.log(JSON.stringify(obj));



// output

// a, { b: 1, c: { h: 1, i: { j: { k: 1 } } } };

// b, 1;

// c, { h: 1, i: { j: { k: 1 } } };

// h, 1;

// i, { j: { k: 1 } };

// j, { k: 1 };

// k, 1;

// d, { e: { f: 1 }, g: 1 };

// e, { f: 1 };

// f, 1;

// g, 1;
  
//   has context menu