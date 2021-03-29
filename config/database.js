module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'ID309897_blogs.db.webhosting.be'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'ID309897_blogs'),
        username: env('DATABASE_USERNAME', 'ID309897_blogs'),
        password: env('DATABASE_PASSWORD', 'ikhaatblogs15'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
