import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider />
  <br />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've worked with a range of Technologies in a web develpoment world.
    From Back-End to Design.
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem" />
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Experience with <br />
        React.js, JavaScript, HTML, CSS.
      </ListParagraph>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem" />
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>
        Experience with <br />
        Node.js, Databases, C#, Ruby, Ruby on Rails, MVC and API's
      </ListParagraph>
    </ListItem>
  </List>
</Section>
);

export default Technologies;
