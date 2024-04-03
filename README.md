# INKVENTORY

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=HugoVS26_inkventory-back)](https://sonarcloud.io/summary/overall?id=HugoVS26_inkventory-back)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=HugoVS26_inkventory-back&metric=coverage)](https://sonarcloud.io/summary/overall?id=HugoVS26_inkventory-back)

## Technologies Used

- **Git**: Version control system used to track changes in code and collaborate on software projects.

- **Node.js**: Server-side JavaScript runtime environment for scalable and high-performance applications.

- **Express.js**: Web framework for Node.js simplifying API and web application development.

- **TypeScript**: Language extending JavaScript with static types to prevent common errors during development.

- **MongoDB**: Highly flexible and scalable NoSQL database using document-based data storage.

- **Jest**: JavaScript testing framework useful for unit, integration, and end-to-end testing in Node.js and React applications.

<br/>

<div align="center">  
<a href="https://github.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" /></a>  
<a href="https://nodejs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="50" /></a>  
<a href="https://expressjs.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="50" /></a>  
<a href="https://www.typescriptlang.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="50" /></a>  
<a href="https://www.mongodb.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="50" /></a>  
<a href="https://www.jestjs.io/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/jest.svg" alt="Jest" height="50" /></a>  
</div>

## Endpoints

### GET /

- Check the server response through the pingController.
- Sends the message "Leeeeroy Jenkins!" in the response body and status 200.

### GET / (wrong endpoint)

- Request to a wrong endpoint.
- Sends the message "Endpoint not found" in the response body and status 404.

### GET / tattoos

- Request for a list of 9 tattoos.
- Sends a collection of 9 tattoos in the response body and status 200.

### GET / tattoos / :id

- Request for a determinated tattoo.
- Sends a the determinated tattoo in the response body and status 200.

### DELETE / tattoos / delete / :id

- Request to delete a hotel by its id.
- Sends the message "The tattoo has been deleted" in the response body and status 200.

### POST / tattoos / add

- Request to create an tattoo.
- Sends the message "The tattoo has been created succesfully", the information of the tattoo in the response body and status 201.

### PATCH / tattoos / :id

- Request to modify a tattoo.
- Sends the tattoo modified back and status 200.
