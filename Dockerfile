# Stage 1
FROM node:11 as react-build
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run dev

EXPOSE 5000
CMD ["npm", "run" "dev"]

