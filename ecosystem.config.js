module.exports = {
  apps : [{
    name: 'ov-server',
    script: 'npm',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'run start:development',
    instances: 0,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'trung',
      host : 'overlead.co',
      ref  : 'origin/client',
      repo : 'git@github.com:trungtvq/luanvan.git',
      path : '/apps/ov-client',
	ssh_options: ['ForwardAgent=yes'],
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
	development: {
      user : 'trung',
      host : 'overlead.co',
      ref  : 'origin/server',
      repo : 'git@github.com:trungtvq/luanvan.git',
      path : '/apps/server',
        ssh_options: ['ForwardAgent=yes'],
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env development'
    }
  }
};
