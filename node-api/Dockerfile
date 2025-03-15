FROM node:14-alpine

WORKDIR /usr/src/app

# copies over the package.json and package-lock.json, which contain information about the dependencies
COPY package*.json ./

RUN npm install

# copies over index.js, where the code for the API is
COPY index.js ./

# Expose the port that the app will run on
EXPOSE 3000

# executes the command "node index.js" once the container is running
CMD ["node", "index.js"]