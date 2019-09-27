import { useState, useEffect } from 'react';
import $ from 'jquery';

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
    var _a = useState(), state = _a[0], setState = _a[1];
    useEffect(function () {
        if (ref && ref.current) {
            setState(callback($(ref.current)));
        }
    }, [callback, ref]);
    return state;
};

export default useJQuery;
