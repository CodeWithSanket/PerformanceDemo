
const waitingForSomething = (ms) => {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}

export default function SlowComponent() {
    waitingForSomething(2000);
    return null;
}