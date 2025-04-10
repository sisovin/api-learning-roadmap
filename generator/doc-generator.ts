import fs from 'fs';
import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // files containing annotations as above
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const outputPath = path.resolve(__dirname, '../docs/swagger.json');
fs.writeFileSync(outputPath, JSON.stringify(swaggerSpec, null, 2));

console.log(`Swagger documentation generated at ${outputPath}`);
