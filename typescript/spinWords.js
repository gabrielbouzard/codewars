"use strict";
exports.__esModule = true;
exports.Kata = void 0;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.spinWords = function (words) {
        var l = words.split(" ");
        var i;
        var j;
        var result = "";
        for (i in l) {
            var w = l[i];
            if (w.length >= 5) {
                for (j = w.length - 1; j >= 0; j--) {
                    result += w.charAt(j);
                }
                result += " ";
            }
            else {
                result += w + " ";
            }
        }
        return result.slice(0, -1);
    };
    return Kata;
}());
exports.Kata = Kata;
