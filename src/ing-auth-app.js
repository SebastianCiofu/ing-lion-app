import { Router } from '@vaadin/router';
import { LitElement, html } from 'lit';
import './components/login/login.js';
import './components/user-details/user-details.js';

const routes = [
  { path: '/', component: 'ing-login' },
  { path: '/user-details', component: 'ing-user-details' },
];

const router = new Router(document.querySelector('#router-outlet'));
router.setRoutes(routes);

router.beforeEach((context, commands) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const isProtectedRoute = context.pathname.startsWith('/user-details')

  if (isProtectedRoute && !isLoggedIn) {
    return commands.redirect('/');
  }
  return null;
});

class IngAuthApp extends LitElement {
  render() {
    return html`
     <ing-login></ing-login>
    `;
  }
}

customElements.define('ing-auth-app', IngAuthApp);
