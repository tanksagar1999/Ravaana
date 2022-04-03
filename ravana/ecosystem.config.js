module.exports = {
  apps: [
    {
      name: "BRavana",
      script: "./bin/www",
      watch: true,
      ignore_watch: ["node_modules", "public", "logs"],
      env: {
        PORT: 3011,
        NODE_ENV: "development",
        watch: true,
        BASE_URL: "http://localhost:3011/",
        DB_URI: "mongodb://65.0.214.54:20000/bravana",
        API_KEY: "77e695d6-b6a9-4216-879e-78eb93503087",
      },
      env_staging: {
        PORT: 3011,
        NODE_ENV: "staging",
        DB_URI: "mongodb://65.0.214.54:20000/bravana",
        API_KEY: "77e695d6-b6a9-4216-879e-78eb93503087",
      },
      env_production: {
        PORT: 3011,
        NODE_ENV: "production",
        DB_URI: "",
      },
    },
  ],
};
