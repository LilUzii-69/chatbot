# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Build your React application (you can adjust this for your project)
RUN npm run build

# Expose a port for your React app (default is 3000)
EXPOSE 3000

# Define the command to start your application
CMD ["npm", "start"]
