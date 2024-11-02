import React, { useEffect, useRef, useState } from "react"

export function toHex(x:BigInt){
  return "0x" + x.toString(16).toUpperCase()
}

let cacheMap: {[url:string]:any} = {} 

export async function fetchCache(url: string):Promise<any>{
  let data = cacheMap[url]
  if(data !== undefined){
    return data
  } else {
    let res = await fetch(url)
    let data = await res.json()
    cacheMap[url] = data
    return data
  }
}

export function useBool(init:boolean):[boolean, ()=>void] {
  let [value, setValue] = useState(init)

  function toggle() {
    setValue(!value)
  }
  return [value, toggle]
}

export function joinArray(arr:any[], sep:any): any[] {
  if (arr.length === 0) {
    return []
  } else {
    let items = []
    items.push(arr[0])
    for (let i = 1; i < arr.length; i++) {
      items.push(sep)
      items.push(arr[i])
    }
    return items
  }
}

export function useAwait<T>(init:T, f:()=>Promise<T>, deps:any[]):T {
  let ref = useRef(0)
  let [value, setValue] = useState(init)
  useEffect(function() { 
    let nonce = Math.random()
    ref.current = nonce
    f().then((x)=>{
      if(ref.current === nonce) setValue(x)
    })
  }, deps)
  return value
}

export function useFetch<T>(init:T, url:string):T {
  async function f(){
    let req = await fetch(encodeURI(url))
    return req.json()
  }
  return useAwait(init, f, [url])
}

// async function promiseObj(obj0: any){
//   let obj1:{[key:string]:any} = {}
//   async function pushPair([key, p]:[string, any]) {
//     let value = await p
//     obj1[key] = value
//   }
//   let ps = Object.entries(obj0).map(pushPair)
//   await Promise.all(ps)
//   return obj1
// }
// 
// export function asyncRender(Comp:any, deps:any[]) {
//   return function (promiseProps:any):JSX.Element{
//     let loading = React.createElement('div')
//     let comp = promiseObj(promiseProps).then((props)=>React.createElement(Comp, props))
//     return useAwait<any>(loading, comp, deps)
//   }
// }
