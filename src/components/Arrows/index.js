import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi'

export default function Arrows() {
  const [change, setChange] = useState(false);

  return (
    <Container active>
      <FiArrowDown size={24} color="rgb(0, 232, 104)" />
    </Container>
  );
}

export const Container = styled.div`
  width: 15px;
  height: 15px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
`;