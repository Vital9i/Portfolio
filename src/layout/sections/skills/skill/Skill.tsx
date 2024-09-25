import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SlillPropsType = {
    iconId:string
    title:string
    description:string
}

export const Skill = (props: SlillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} />
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
                )
}

const StyledSkill = styled.section`
    width:33%;
    background-color: #7df081;
    margin: 3px;

`

const SkillTitle = styled.h3`
    
`

const SkillText = styled.p`
    
`