import { OpenAPIHono } from '@hono/zod-openapi';

import { postTextsApp } from './postTexts';

const app = new OpenAPIHono();

app.route('/', postTextsApp);

export { app as textApp };
