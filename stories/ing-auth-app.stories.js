import { html } from 'lit';
import '../src/ing-auth-app.js';

export default {
  title: 'IngAuthApp',
  component: 'ing-auth-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <ing-auth-app
      style="--ing-auth-app-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </ing-auth-app>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
