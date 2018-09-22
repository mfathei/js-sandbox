// Iterator Example
function nameIterator(names) {
    let nextIndex = 0;
    return {
        next: function() {
            return (nextIndex < names.length) ? {
                value: names[nextIndex++],
                done: false
            } : {
                done: true
            };
        }
    };
}
// names array
const namesArr = ['John', 'jack', 'Jill'];
const names = nameIterator(namesArr);
console.log(names.next());
console.log(names.next().value);
console.log(names.next());
console.log(names.next());
console.log('=============================================');
// Generator Example
function* sayNames() {
    yield 'Jill';
    yield 'Jack';
    yield 'John';
}
const namesGenerator = sayNames();
console.log(namesGenerator.next());
console.log(namesGenerator.next());
console.log(namesGenerator.next());
console.log(namesGenerator.next());
console.log('=============================================');
// Number Generator
function* generateIds() {
    let nextIndex = 1;
    while (true) {
        yield nextIndex++;
    }
}
const ids = generateIds();
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
