export default {
  url: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/api-counselor',
  port: process.env.PORT || 5050,
  jwtSecretKey: process.env.JWT_SECRET || 'tj67O==5H',
};
