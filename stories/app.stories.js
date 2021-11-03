import { html } from 'lit-html';
import '../src/app.js';

export default {
  title: 'Project two',
  component: 'learning-card',
  argTypes: {
    type: { control: 'text' },
  },
};

function Template({ type = 'science', slot, header, subheader }) {
  return html`
    <learning-card type="${type}" header="${header}" subheader="${subheader}">
      ${slot}
    </learning-card>
  `;
}

export const ScienceCard = Template.bind({});
ScienceCard.args = {
  type: 'science',
  header: 'Unit 1',
  subheader: 'Chem Connection',
  slot: html`
    <ul>
      <li>Describe the subatomic particles that make up an atom.</li>
      <li>
        Use the periodic table to determine the numbers of protons and electrons
        in a neutral(uncharged) atom.
      </li>
    </ul>
  `,
};

export const QuestionCard = Template.bind({});
QuestionCard.args = {
  type: 'question',
  header: 'Unit 1',
  subheader: 'Learning Objectives',
  slot: html`
    <p>
      There is about 0.4 pound or 200 grams of salt (NaCL) in the average adult
      human body.
    </p>
  `,
};

export const IdeaCard = Template.bind({});
IdeaCard.args = {
  type: 'idea',
  header: 'Unit 1',
  subheader: 'Did you know?',
  slot: html`
    <ul>
      <li>Describe the subatomic particles that make up an atom.</li>
      <li>
        Use the periodic table to determine the numbers of protons and electrons
        in a neutral(uncharged) atom.
      </li>
      <li>Describe the subatomic particles that make up an atom.</li>
      <li>
        Use the periodic table to determine the numbers of protons and electrons
        in a neutral(uncharged) atom.
      </li>
    </ul>
  `,
};
