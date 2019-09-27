'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('react');
var $ = _interopDefault(require('jquery'));

/**
@example
const ref = useRef<HTMLDivElement>(null)
usejQuery(ref, $ => {
  $.fadeOut(3000).fadeIn(3000)
})
    
const text = usejQuery(ref, $ => {
  return $.text()
})
useEffect(()=> {
  console.log(text)
},[text])
*/
var useJQuery = function (ref, callback) {
    var _a = react.useState(), state = _a[0], setState = _a[1];
    react.useEffect(function () {
        if (ref && ref.current) {
            setState(callback($(ref.current)));
        }
    }, [callback, ref]);
    return state;
};

exports.useJQuery = useJQuery;
