let points = [
    {x: 2, y: 4},
    {x: 4, y: 4},
    {x: 1, y: 3},
    {x: 3, y: 4},
    {x: 2, y: 2},
    {x: 1, y: 1},
    {x: 3, y: 1},
    {x: 2, y: 0}
];

// sort points in y
// pick origin, the lowest in y
// sort other points w.r.t origin in order of polar angle
// Math.atan2(deltaY, deltaX)