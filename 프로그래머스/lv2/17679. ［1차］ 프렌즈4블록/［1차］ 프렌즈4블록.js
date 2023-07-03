
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
/**
 * range:: (Number, [Number) => Array
 * range(5, 10) => [5, 6, 7, 8, 9];
 * range(3) => [0, 1, 2];
 */
function range(a, b) {
    if(typeof b === 'undefined') 
        [a, b] = [0, a];

    const result = [];

    for(; a < b; a++) {
        result.push(a);
    }

    return result;
}

/**
 * curry :: Function => Function
 * f(a, b)의 형태를 f(a)(b)로 호출 할 수 있도록 변경한다. 
 */
function curry(f) {
    return function(...rest) {
        if(rest.length >= f.length)
            return f(...rest);

        return curry(f.bind(null, ...rest));
    }
}

/**
 * 배열의 첫번째 원소를 반환한다. 
 */
function head(arr) {
    return (arr || [])[0];
}

/**
 * match :: RegEx => String => Array;
 */
const match = curry(
    function(regex, str) {
        return str.match(regex);
    }
);

const pluck = curry(
    function(key, target) {
        return (target || {})[key];
    }
);

function zip(...arrays) {
    const len = Math.max(
        ...arrays.map(pluck('length')));

    return range(len)
        .map(n => arrays.map(arr => arr[n]));
}



function toString(problem) {
    const s = problem
        .map(match(/./g))
        .map(split => split.join('\t'))
        .join('\n');

    console.log(s);
}

function blocksToString(blocks) {
    // const problem = zip(...blocks)
    //  .reverse()
    //  .map(a => a.join(''));

    // return toString(problem);

    const s = blocks.map(a => a.join(' '))
        .join('\n');

    console.log(s);
}


/**
 * 배열안의 문자열을 잘라 아래 블록이 배열의 0번부터 오도록 변환한다. 
 */
function arrayToBlocks(array) {
    return zip(...array.map(match(/./g)))
        .map(arr => arr.reverse());
}

function deleteColumn(block, column) {
    for(let i = column.length; i--; ) {
        if(column[i] == 0) continue;

        block.splice(i, 1);
    }
}

/**
 * 2x2 블록이 없을 때까지 제거하며 제거된 블록의 개수를 반환한다. 
 */
function* calcNumBlocks(w, h, blocks) {
    let match, result, numBlocks = 1;

    const add = (a, b) => a + b;

    while(numBlocks > 0) {
        match = matchBlocks(w, h, blocks);
        // result = match.map(a => [a.indexOf(1), a.filter(n => n == 1).length]);
        // result.forEach(([index, len], i) => blocks[i].splice(index, len));

        // numBlocks = result.reduce((sum, [index, n]) => sum + n, 0);
        numBlocks = match
            .map(a => a.reduce(add))
            .reduce(add);

        match.forEach((a, i) => deleteColumn(blocks[i], a));
        yield numBlocks;
    }
}

/**
 * 2x2 블록을 찾아 아래 형태로 블록의 위치를 반환한다. 
 * [0, 1, 1, 0]
 * [0, 1, 1, 0]
 * [1, 1, 0, 0]
 * [1, 1, 0, 0]
 */
function matchBlocks(w, h, blocks) {
    const result = range(w).map(n => new Array(h).fill(0))
        , mat = [[0, 0], [1, 0], [0, -1], [1, -1]]

    for(let y = h - 1; y >= 1; y--) {
        for(let x = 0; x < w - 1; x++) {
            if(y >= blocks[x].length) continue;
            if(!varifyBlock(blocks, x, y)) continue;

            mat.forEach(([tx, ty]) => result[x + tx][y + ty] = 1);
        }
    }

    return result;
}

/**
 * x, y 위치의 블록과 주변 블록이 같은지 확인한다. 
 */
function varifyBlock(blocks, x, y) {
    const mat = [[1, 0], [0, -1], [1, -1]]
        , b = blocks[x][y];

    return mat.every(([tx, ty]) => blocks[x + tx][y + ty] == b);
}


/**
 * 2x2 블록의 개수를 모두 더하여 반환한다. 
 */
function scanNumOf2x2Blocks(problem) {
    const blocks = arrayToBlocks(problem)
        , w = blocks.length
        , h = head(blocks).length;

    return [...calcNumBlocks(w, h, blocks)]
        .reduce((a, b) => a + b);
}

function solution(m, n, board) {
    return scanNumOf2x2Blocks(board);
}