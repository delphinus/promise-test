///<reference path="./typings/tsd.d.ts" />

import es6Promise = require("es6-promise");
const Promise = es6Promise.Promise;

"use strict";
console.log("start");
const p = new Promise((resolve, reject) => {
    console.log("promise start");
    setTimeout(() => {
        console.log("done!");
        resolve("done!");
    }, 1000);
});
p.then((result: string) => console.log(`result: ${result}`));
console.log("end");
