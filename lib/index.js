"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var monocle_ts_1 = require("monocle-ts");
var unsafeCoerce = function (a) { return a; };
exports.iso = function () { return new monocle_ts_1.Iso(unsafeCoerce, unsafeCoerce); };
/** Lifts a function operate over newtypes */
exports.over = function (f) {
    return new monocle_ts_1.Getter(f);
};
exports.getSetoid = function (S) { return S; };
exports.getOrd = function (O) { return O; };
exports.getSemigroup = function (S) { return S; };
exports.getMonoid = function (M) { return M; };
exports.getSemiring = function (S) { return S; };
exports.getRing = function (R) { return R; };
exports.getField = function (F) { return F; };
//# sourceMappingURL=index.js.map