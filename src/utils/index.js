Function.prototype.before = function (beforeFn) {
	const mainFn = this;
	return function () {
		beforeFn.apply(this, arguments);
		return mainFn.apply(this, arguments);
	};
};
Function.prototype.after = function (afterFn) {
	const beforeReturnFn = this;
	return function () {
		let ret = beforeReturnFn.apply(this, arguments);
		console.log("ret :>> ", ret);
		afterFn.apply(this, [...arguments].concat(ret));
		return ret;
	};
};
