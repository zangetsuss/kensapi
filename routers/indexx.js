const path = require('path');
exports.routes = {
   category: 'main',
   path: '/',
   parameter: '',
   method: 'get',
   execution: async (req, res, next) => {
      res.sendFile(path.join(__dirname, './index.html'))
   },
   error: false 
}