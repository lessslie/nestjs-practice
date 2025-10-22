import { config } from 'dotenv';
import { join } from 'path';

// Cargar variables de .env.test
config({ path: join(__dirname, '../.env.test') });

// Aumentar timeout global si es necesario
jest.setTimeout(30000);