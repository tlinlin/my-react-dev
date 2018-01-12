export function mixins(...list) {
    return function (target) {
        Object.assign(target.prototype, ...list);
    };
}

export function testable(target) {
    target.prototype.isTestable = true;
}