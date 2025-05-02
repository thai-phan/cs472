## Code 1

### Output

undefine
8
8
9
10
undefine

### Lexical environment diagram

1. Global EC creation:
Outer: null,

LE: [{a: undefine, b: undefine, c: undefine }],

TDZ: {}

2. Global EC execution:

Outer: null,

LE: [{a: 5, b: 10, c: fn}],

TDZ: {}

3. cFunction EC creation:

Outer: global,

LE: [{a: 8, b: 9, c: 10, f: undefine, x: undefine, arguments: obj}],

TDZ: {}

4. cFunction EC execution:

Outer: global,

LE: [{a: 8, b: 9, c: 10, f: fn, x: 10, arguments: obj}],

TDZ: {}

5. fFunction EC creation:

Outer: cFunction,

LE: [{a: 8, b: 9, c: 10, x: undefine}]

TDZ: {}

6. fFunction EC execution:

Outer: cFunction,

LE: [{a: 8, b: 9, c: 10, x: 5}]

TDZ: {}

## Code 2

### Output

81
25

### Lexical environment diagram

1. Global EC creation:

Outer: null,

LE: [   {x: undefine, myFunction: undefine }   ],

TDZ: {}

2. Global EC execution:

Outer: null,

LE: [{x: 9, myFunction: fn }],

TDZ: {}

3. 1Function EC creation:

Outer: global,

LE: [{ arguments: obj }],

TDZ: {}

4. 1Function EC execution:

Outer: global,

LE: [{ arguments: obj }],

TDZ: {}

5. 2Function EC creation:

Outer: global,

LE: [{ arguments: obj }],

TDZ: {}

6. 2Function EC execution:

Outer: global,

LE: [{ arguments: obj }],

TDZ: {}

## Code 3

### Output

10

### Lexical environment diagram

1. Global EC creation:

Outer: null,

LE: [   {foo: undefine, bar: undefine }   ],

TDZ: {}

2. Global EC execution:

Outer: null,

LE: [   {foo: 1, bar: fn }   ],

TDZ: {}

3. barFunction EC creation:

Outer: global

LE: [{ foo: undefine }]

TDZ: {}

4. barFunction EC execution:

Outer: global

LE: [{ foo: 10 }]

TDZ: {}
