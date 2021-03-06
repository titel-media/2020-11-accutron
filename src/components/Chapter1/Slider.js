import React, { useRef } from 'react';
import styled from '@emotion/styled';
import NavBar from './NavBar';
import NavBarProvider from '../../providers/NavBarProvider';
import Origins1 from './slides/1.Origins';
import Technology2 from './slides/2.Technology';
import Technology3 from './slides/3.Technology';
import Legacy4 from './slides/4.Legacy';
import Legacy5 from './slides/5.Legacy';
import Legacy6 from './slides/6.Legacy';

const SliderRoot = styled.div`
  position: relative;
  overflow: hidden;
`;

const headings = ['origins', 'technology', 'legacy']

export default function Slider() {
  const pinSectionRef = useRef(null);

  return (
    <SliderRoot ref={pinSectionRef}>
      <NavBarProvider headings={headings}>
        <Origins1 index={0} />
        <Technology2 index={1} />
        <Technology3 index={1} />
        <Legacy4 index={2} />
        <Legacy5 index={2} />
        <Legacy6 index={2} />
        <NavBar sliderRef={pinSectionRef} />
      </NavBarProvider>
    </SliderRoot>
  );
};
