require('dotenv').config();

module.exports = {
  apps: [
    {
      name: 'kisa be aga server',
      script: 'npm run start',
    },
  ],

  deploy: {
    production: {
      user: process.env.PM2_USER,
      host: process.env.PM2_HOST,
      ref: 'origin/main',
      repo: 'https://github.com/cancng/kisa-be-aga',
      path: process.env.PM2_PATH,
      'post-deploy':
        'cd server && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
    },
  },
};
