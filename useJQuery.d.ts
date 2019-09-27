/// <reference types="react" />
/// <reference types="jquery" />
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
export declare const useJQuery: <T extends HTMLElement, S extends any>(ref: import("react").RefObject<T>, callback: ($el: JQuery<T>) => S) => S | undefined;
