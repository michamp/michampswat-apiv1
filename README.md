# MICHAMP SWAT API V1 Template
MICHAMP SWAT (Security Warnings Aggregated Technology) Template API Version 1 - Free

[DEMO](https://mellow-florentine-d6077c.netlify.app/)

You can deploy this template which is just a starter. It comes with test data fetched from the deploy server. To get this working you need to update the site config variable in astro.config.mjs at the root of the application. At line 9 replace ```https://localhost:4321``` with your new URL of your new Netlify server.

```javascript 
astro.config.mjs
7   // https://astro.build/config
8   export default defineConfig({
9   site: "http://localhost:4321",
10  // Enable React to support React JSX components.
11  integrations: [react(), icon({

```
RapidAPI Integration
To integrate with RapidAPI change the fetch instructions at the top of the src/pages/index.astro the MICHAMP SWAT API FBI News and Top Ten endpoint [MICHAMP SWAT API](https://rapidapi.com/michamp/api/michamp-swat).


[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/michamp/michampswat-apiv1)

