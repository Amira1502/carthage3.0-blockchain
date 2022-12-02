import React from 'react';
import { DiZend } from 'react-icons/di';
import { MdOutlineDraw, MdWorkspacesOutline } from "react-icons/md";

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './OrganisationsStyles';

const Organisation = () =>  (
  <Section id="organisation">
    <SectionDivider divider />
    <SectionTitle>Organisation</SectionTitle>
    <SectionText>
    NEAR-Meets de Carthage3.0 : 
    Se rencontrer, Apprendre, Partager des idées, Créer des réseaux, Etablir des opportunités sur le web ouvert, et Faire du Web3 une réalité.  
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <MdOutlineDraw size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Workshop</ListTitle>
          <ListParagraph>
            Développez vos connaissances sur la blockchain et le Web3.<br />
            Interagissez avec les instructeurs certifiés de Carthage3.0 et accédez à une formation structurée sur la blockchain.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <MdWorkspacesOutline size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Network</ListTitle>
          <ListParagraph>
          Créer des réseaux efficaces et découvrir les opportunités<br />
          du Web3 et de la blokchaine   
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Collaborez</ListTitle>
          <ListParagraph>
          Collaborez avec des esprits brillants dans l'écosystème blockchain<br />
          Développez des projets révolutionnaires pour résoudre des problèmes en Tunisie
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Organisation;