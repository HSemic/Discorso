import axios from 'axios';

import { config } from './discorso_config';

export default axios.create({
  baseURL: 'https://discorso-6eyj4bjopq-ew.a.run.app',
  headers: {
    authorization: `Bearer ${config.apiKey}`
  },
  data: {}
});
