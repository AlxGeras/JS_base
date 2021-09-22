'use strict'

const iteration_log = (i) => { console.log(i); return ++i }

for (let i = 0; i < 10; i = iteration_log(i)) { }
