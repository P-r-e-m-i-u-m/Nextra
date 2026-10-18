const scheduleRetry = (queueName, job, delay) => {
  const payload = JSON.stringify(job);
  const timer = setTimeout(() => {
    redis.zadd(queueName, 0, payload).catch((err) => {
      logger.error("Retry enqueue failed", err);
    });
  }, delay);
  timer.unref();
};  // Fixed memory leak - Updated: 2026-10-18
// build: 1792333152
