import React from "react";
// import styled from 'styled-components'

type PaginationProps = {
  count: number;
  currentPage: number;
  updateCurrentPage: ()=>void;
};

// const Button = styled.button`
// margin-right: 10px;
// // background: ${props=> props.key===props.Page ? "blue": "black"};
// cursor: pointer;
// color: white;
// `
const Pagination = (props: PaginationProps) => {
  console.log(props)
  let num = 1;
  let c = new Array(props.count).fill("").map(i=>num++);
  console.log(c);
  return (
    <div>
      {c.map(i=>{
        return  <button key={i} style={{marginRight: "10px", background: "black", color: "white",cursor: "pointer"}}>{i}</button>
      })}
   
    </div>
  )
};

export default Pagination;
