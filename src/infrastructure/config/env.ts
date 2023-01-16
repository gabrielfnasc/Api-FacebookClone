export default {
  url: process.env.MONGO_URL || 'mongodb://0.0.0.0:27017/counselor-api',
  port: process.env.PORT || 5050,
  jwtSecretKey: process.env.JWT_SECRET || 'tj67O==5H',
};
