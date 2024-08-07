
![People](/public/man-hoodie-subway-small.jpg)


# MICHAMP SWAT API V1 Template
MICHAMP SWAT (Security Warnings Aggregated Technology) Template API Version 1 - Free

[DOCS](https://michamp.com/michampdocs/)

[DEMO](https://mellow-florentine-d6077c.netlify.app/)

Install 
--
1. Clone repo to a local directory.
2. In root of the template directory run either of the below commands. 

```yarn``` 

```yarn install``` 

```npm install```

Either of the above three commands will install the dependencies contained in the package.json file.
 
3. After all dependencies are installed run. 

```yarn run dev```

```npm run dev```
 
 Either of the above two commands will start the astro server instance. 
 
 4. Open a browser and navigate to ```http://localhost:4321```
 
Deploy
--
You can deploy this template which is just a starter. It comes with test data fetched from the deploy server. To get this working you need to update the site config variable in ```astro.config.mjs``` at the root of the application. 
At line 9 replace ```https://localhost:4321``` with your new URL of your new Netlify server.

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



<a href="https://www.freepik.com/free-photo/man-from-back-subway-people-metro_13413026.htm#fromView=search&page=1&position=6&uuid=170ff172-2667-496b-9780-132b6dba8596">Image by teksomolika on Freepik</a>


