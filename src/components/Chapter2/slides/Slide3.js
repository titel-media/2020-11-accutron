import React from 'react';
import styled from '@emotion/styled';
import { H4, P } from '../../../styles/typography';
import AccutronSpaceviewAlphaImg from '../../../assets/1961_Accutron-SpaceviewAlpha.png'
import { css } from '@emotion/core';
import Animate, { Animations } from '../../Animate';
import HalfDisc from '../../ImageHalfDisc';

const SlideRoot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

const SlideHalf = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export default function Slide1() {
  return (
    <SlideRoot>
      {/* <SlideHalf>
        <div css={css`max-width: 500px;`}>
          <Animate animation={Animations.FadeInUp}>
            <P>
              Long before American watchmaker Bulova introduced its legendary Accutron watch in October 1960,
            </P>
          </Animate>
          <Animate animation={Animations.FadeInUp}>
            <img src={WatchesSchemeImg} height="500" alt="Watches scheme" />
          </Animate>
        </div>
      </SlideHalf> */}
      <SlideHalf>
        <div css={css`max-width: 536px;`}>
          <Animate animation={Animations.FadeInUp}>
            <HalfDisc size={536} img={AccutronSpaceviewAlphaImg} right />
          </Animate>
        </div>
      </SlideHalf>
    </SlideRoot>
  );
};