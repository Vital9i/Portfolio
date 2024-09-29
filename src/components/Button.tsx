import styled from "styled-components";
import React from "react";
import { theme } from "../styles/Theme";

export const Button = styled.button`
font-size: 14px;
font-weight: 400;
text-transform:uppercase;
letter-spacing: 1px;
width: 170px;
 height: 32px;
z-index: 0;

position: relative;

&:hover {
    ::before {
        height: 100%;
        width: 100%;
        color:${theme.colors.font}
    }

}
    &::before {
        
        content:'';
    display: inline-block;
    background-color: ${theme.colors.accent};
    height: 10px;
    width: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: -1;
    transform: translateX(-50%);
       }




`