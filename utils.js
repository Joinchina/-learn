function defaultEquals(a, b) {
    return a === b;
}
class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}
export {
    Node,
    defaultEquals
}
