const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "two");
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "four");
});
const p5 = new Promise((resolve, reject) => {
    reject("reject");
});

function awsomeFunction() {

    Promise.all([p1, p2, p3, p4, p5]).then(values => {
    console.log(values);
    }, reason => {
        console.log(reason)
    });

    //From console:
    //"reject"

    // Evenly, it's possible to use .catch
    Promise.all([p1, p2, p3, p4, p5]).then(values => {
        console.log(values);
    }).catch(error => {
        console.log(error)
    });
}