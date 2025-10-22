// rateLimiter.js
const rateLimitWindowMs = 60 * 1000; // 1 minute
const maxRequests = 5; // per IP per minute
const requestCounts = {};

function rateLimiter(req, res, next) {
  const userIp = req.ip;
  const currentTime = Date.now();

  if (!requestCounts[userIp]) {
    requestCounts[userIp] = [];
  }

  // Filter out old requests (older than window)
  requestCounts[userIp] = requestCounts[userIp].filter(
    (timestamp) => currentTime - timestamp < rateLimitWindowMs
  );

  if (requestCounts[userIp].length >= maxRequests) {
    return res.status(429).send("🚫 Too many requests! Calm down, warrior.");
  }

  // Record the new request
  requestCounts[userIp].push(currentTime);
  next();
}

module.exports = rateLimiter;
