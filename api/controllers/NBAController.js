/**
 * NBAController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const request = require('request');

module.exports = {
  

  /**
   * `NBAController.schedule()`
   */
  schedule: async function (req, res) {
    let datetime = new Date();
    let day = datetime.getDate();
    let month = datetime.getMonth() + 1;
    
    request(`http://api.sportradar.us/nba/trial/v4/en/games/2018/${month}/${day}/schedule.json?api_key=h46eb9jy2qy2rdvqfhf6gfa3`, (error, response, body) => {
      return res.json(JSON.parse(body));
    });
  },

  /**
   * `NBAController.results()`
   */
  results: async function (req, res) {
    return res.json({
      todo: 'results() is not implemented yet!'
    });
  },

  /**
   * `NBAController.standings()`
   */
  standings: async function (req, res) {
    request('http://api.sportradar.us/nba/trial/v4/en/seasons/2017/REG/standings.json?api_key=h46eb9jy2qy2rdvqfhf6gfa3', (error, response, body) => {
      return res.json(JSON.parse(body));
    });
  }

};

