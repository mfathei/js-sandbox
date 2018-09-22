const user = {
    email: 'test@mail.com'
};
try {
    // Produce a ReferenceError
    // myFunction();
    // produce a TypeError
    // null.myFunction();
    // Produce SyntaxError
    // eval('Hello World');
    // Produce URIError
    // decodeURIComponent('%');
    if (!user.name) {
        // throw new Error('user has no name');
        throw new SyntaxError('user has no name');
    }
} catch (e) {
    console.error(e);
} finally {
    console.log('Finally will run regardless of result');
}
console.log('Program continues...');
