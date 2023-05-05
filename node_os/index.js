const fastify = require('fastify')();
const os = require('os');

fastify.get('/', (request, reply) => {
    reply.send({
      architecture: os.arch(),
      hostname: os.hostname(),
      totalMemory: `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,
      freeMemory: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB`,
      cpuCores: os.cpus().length,
      cpuModel:os.cpus()[0].model
    })
});

fastify.listen(3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Server running on port 3000');
});