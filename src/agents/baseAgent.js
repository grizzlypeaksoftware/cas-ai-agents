const logger = require('../utils/logger');

class BaseAgent {
  constructor(name) {
    this.name = name;
  }

  async executeTask(task) {
    logger.info(`Agent ${this.name} executing task: ${task.title}`);
    // TODO: Implement basic task execution logic
    throw new Error('executeTask method must be implemented by subclasses');
  }

  async communicate(message) {
    logger.info(`Agent ${this.name} communicating: ${message}`);
    // TODO: Implement communication logic
  }
}

module.exports = BaseAgent;