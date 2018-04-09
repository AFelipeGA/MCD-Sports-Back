/**
 * WorldCupController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const request = require('request');

module.exports = {
  

  /**
   * `WorldCupController.schedule()`
   */
  schedule: async function (req, res) {
    request('https://api.sportradar.us/soccer-t3/intl/en/tournaments/sr:tournament:16/schedule.json?api_key=czrd8gqdc3pc6r7a66n9hydv', (error, response, body) => {
      return res.json(JSON.parse(body));
    });
  }

};

