function uniqByKeepFirst(a, key) {
    let seen = new Set();
    return a.filter(item => {
        let k = key(item);
        return seen.has(k) ? false : seen.add(k);
    });
}
 
 
function uniqByKeepLast(a, key) {
    return [
        ...new Map(
            a.map(x => [key(x), x])
        ).values()
    ]
}
 
//
 
data = [
    {a:1, u:1},
    {a:2, u:2},
    {a:3, u:3},
    {a:4, u:1},
    {a:5, u:2},
    {a:6, u:3},
];
 
console.log(uniqByKeepFirst(data, it => it.u))
console.log(uniqByKeepLast(data, it => it.u))
