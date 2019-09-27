# useJQuery

```command
$ yarn add @hrdtbs/use-jquery jquery react @types/jquery @types/react
```

```tsx
const App:React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  
  useJQuery(ref, $ => {
    $.fadeOut(3000).fadeIn(3000)
  })

  const text = useJQuery(ref, $ => {
    return $.text()
  })
  
  useEffect(()=> {
    console.log(text)
  },[text])
  
  return (
    <div ref={ref}>Hello, jQuery</div>
  )
}
```
