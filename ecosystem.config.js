module.exports = {
  apps : [{
    name: 'ov-client',
    script: 'npm',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'run start:production',
    instances: 0,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      PORT: 5000,
      NODE_ENV: 'development'
    },
    env_production: {
      PORT: 5000,
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'trung',
      host : 'overlead.co',
      ref  : 'origin/client',
      repo : 'git@github.com:trungtvq/luanvan.git',
      path : '/home/trung/production/ov-client',
	    ssh_options: ['ForwardAgent=yes'],
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js  --env production'
    },
	development: {
      user : 'trung',
      host : 'overlead.co',
      ref  : 'origin/client',
      repo : 'git@github.com:trungtvq/luanvan.git',
      path : '/home/trung/development/ov-client',
        ssh_options: ['ForwardAgent=yes'],
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env development'
    }
  }
};
