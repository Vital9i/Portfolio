import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "../skills/skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill iconId={'code'}
                    title={'HTML5'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
                <Skill iconId={'css'}
                    title={'CSS3'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
                <Skill iconId={'react'}
                    title={'react'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
                <Skill iconId={'typeScript'}
                    title={'TYPESCRIPT'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
                <Skill iconId={'styledComponents'}
                    title={'STYLED COMPONENT'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
                <Skill iconId={'figma'}
                    title={'WEB DESIGN'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
            </FlexWrapper>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    background-color: #b9aeae;
    min-height: 100vh;
`