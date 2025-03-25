import { Redis } from '@upstash/redis';
require("dotenv").config();

const redisClient = () => {
  if (process.env.REDIS_URL && process.env.REDIS_TOKEN) {
    console.log("Redis connected");
    
    return new Redis({
      url: process.env.REDIS_URL,
      token: process.env.REDIS_TOKEN,
    });
  }
  
  throw new Error("Redis connection failed");
};

export const redis = redisClient();