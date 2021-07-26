import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'Open Source Projects'},
  { text: 'Graduated Academy Pittsbugh', },
  { text: 'Still learning Code and Applying it', },
  
];

const Acomplishments = () => (
  <Section>
   <SectionTitle>Personal Acomplishments</SectionTitle>
   <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}    
   </Boxes> 
  </Section>
);

export default Acomplishments;
