import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item: string, index: number) => (
                    <ListItem key={index}>
                        <Link href="">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                ))}
            </ul>
        </StyledHeaderMenu>
    )
}

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap:30px;
        justify-content: center;
    }
`
const ListItem = styled.li` 
position: relative;
`
const Link = styled.a` 
font-family: Josefin Sans, sans-serif;
font-size: 30px;
font-weight: 400;
line-height: 55px;
text-align: center;

`
const Mask = styled.span`
    position: absolute;
    top:0;
    left:0;
    display:inline-block;
    height:50%;
    overflow-y: hidden;
    outline: 1px solid red;
    color: ${theme.colors.accent}

    & + & {
        top:50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }

`