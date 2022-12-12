import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './AcadémieStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { académie3 } from '../../constants/constants';

const Académie3 = () => (
  <Section nopadding id="académie3">
    <SectionDivider />
    <SectionTitle main>Académie3.0</SectionTitle>
    <SectionText>    
    Nous sommes partenaire avec l'université NEAR dont l'objectif est d'aider les membres à se former et à se familiariser avec la blockchain et à adopter Web3.
    </SectionText>
    <GridContainer>
      {académie3.map((p, i) => {
        return (
          <BlogCard key={i}>
          {/* <Img src={p.image} /> */}
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <br></br>

            <div>
              {/* <TitleContent>Stack</TitleContent> */}
              {/* <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList> */}
            </div>
            {/* <UtilityList>
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              <ExternalLinks href={p.source}>Source</ExternalLinks>
            </UtilityList> */}
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Académie3;