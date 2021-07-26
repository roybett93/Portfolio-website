import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hello my name is Roy and this is my Portfolio!
    </SectionTitle>
    <SectionText>
      Welcome to my first Portfolio Webiste. I used React.JS and Node.JS to make this wonderful Website! I just Completed a Programming Boot Camp. I Hope you find some of my newest work interesting. I am also familiar with C#, Ruby, MVC, and SQL!
    </SectionText>
    <Button onClick={() => window.location = 'https://academypgh.com'}>Learn More </Button>
  </LeftSection>
</Section>
);

export default Hero;