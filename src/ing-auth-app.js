import { Router } from '@vaadin/router';
import { LitElement, html } from 'lit';
import './components/login/login.js';
import './components/user-details/user-details.js';

class IngAuthApp extends LitElement {
  firstUpdated() {
    const router = new Router(this.renderRoot.querySelector('#router-outlet'));

    router.setRoutes([
      { path: '/', component: 'ing-login' },
      { path: '/user-details', component: 'ing-user-details' },
    ]);

    router.beforeEach((context, commands) => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      const isProtectedRoute = context.pathname.startsWith('/user-details');

      if (isProtectedRoute && !isLoggedIn) {
        return commands.redirect('/');
      }

      return undefined;
    });
  }

  render() {
    return html` <div id="router-outlet"></div> `;
  }
}

customElements.define('ing-auth-app', IngAuthApp);
