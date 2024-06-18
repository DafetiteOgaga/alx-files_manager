import dbClient from '../utils/db';
import redisClient from '../utils/redis';

/**
 * AppController class
 */
class AppController {
  /**
   * Retrieves the status of redisClient and dbClient, sets the response status
   * code to 200, and sends the status of the clients in a JSON format in the
   * response.
   *
   * @param {Object} request
   * @param {Object} response
   * @return {JSON}
   */
  static getStatus(request, response) {
    response.statusCode = 200;
    response.send({
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    });
  }

  /**
   * Retrieves statistics from database and sends results in response.
   *
   * @param {Object} request
   * @param {Object} response
   * @return {Promise}
   */
  static async getStats(request, response) {
    response.statusCode = 200;
    response.send({
      users: await dbClient.nbUsers(),
      files: await dbClient.nbFiles(),
    });
  }
}

export default AppController;
