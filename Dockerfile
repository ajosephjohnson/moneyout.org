# base image
FROM node:14

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies using yarn
ADD package.json package-lock.json /app/
RUN npm install

# Copy all frontend stuff to new "app" folder
COPY . /app/

CMD ["bash", "-c", "gatsby develop -H 0.0.0.0 -p 3000"]