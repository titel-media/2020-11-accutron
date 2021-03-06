import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useNavBar } from '../../providers/NavBarProvider';
import { css } from '@emotion/core';
import { Column, Row } from '../UIKit';
import { BrowserView, MobileView } from 'react-device-detect';

gsap.registerPlugin(ScrollTrigger);

const SlideRoot = styled.section`
  width: 100%;
  height: ${({ subslides }) => subslides * 100}vh;
  opacity: ${({ visible }) => visible ? 1 : 0};
`;

export const animateFadeOut = (el, props) => {
  return gsap.timeline({
    scrollTrigger:{
      ...props,
      trigger: el,
      pin: el,
      pinSpacing: false,
      scrub: true,
    },
    onComplete: () => {
      gsap.set(el, { y: 0 })
    }
  })
  .set(el, {
    height: '50%',
    opacity: 1
  })
  .to(el, {
    opacity: 0,
    duration: 1,
    ease: 'none',
  })
}

export const animateFadeIn = (el, props) => {
  return gsap.timeline({
    scrollTrigger:{
      ...props,
      trigger: el,
      pin: el,
      scrub: true,
    },
    onComplete: () => {
      gsap.set(el, { y: 0 })
    }
  })
  .set(el, {
    height: '50%'
  })
  .to(el, {
    opacity: 1,
    duration: 1,
    ease: 'none',
  })
}

export const animateFadeInOut = (el, props) => {
  return gsap.timeline({
    scrollTrigger:{
      ...props,
      trigger: el,
      pin: el,
      pinSpacing: false,
      scrub: true,
    },
    onComplete: () => {
      gsap.set(el, { y: 0 })
    }
  })
  .to(el, {
    opacity: 1,
    duration: .5,
    ease: 'none',
  })
  .to(el, {
    opacity: 0,
    duration: .5,
    ease: 'none',
  })
}

const Slide = ({ index, children, startVisible, subslides = 1, animate }) =>  {
  const { setSlideHeading } = useNavBar();
  const slideRef = useRef(null)
  const slideInnerRef = useRef(null)

  useEffect(() => {
    const tl = animate(slideRef.current, {
      onEnter: () => setSlideHeading(index),
      onEnterBack: () => setSlideHeading(index),
    });

    return () => tl.kill();
  }, [animate, index, setSlideHeading])

  return (
    <>
      <BrowserView>
        <SlideRoot ref={slideRef} visible={startVisible} subslides={subslides}>
          <Row ref={slideInnerRef} h="100vh">
            {children}
          </Row>
        </SlideRoot>
      </BrowserView>
      <MobileView>
        <SlideRoot ref={slideRef} visible={startVisible} subslides={subslides}>
          <Column ref={slideInnerRef} h="100vh" css={css`padding: 211px 60px 82px;`}>
            {children}
          </Column>
        </SlideRoot>
      </MobileView>
    </>
  );
};

export default Slide;
