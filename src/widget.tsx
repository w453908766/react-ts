
import React, { useEffect, useState, KeyboardEvent, createElement, useRef, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

import "./style/style.css"


export function AutoScroll(props: any){
  let ref = React.useRef<HTMLDivElement>(null);
  useEffect(()=>{
    ref.current?.scrollIntoView({ behavior: "instant", block: "nearest", inline: "nearest" })
  }, [])
  return React.createElement("div", { ...props, ref: ref })
}
