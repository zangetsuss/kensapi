exports.routes = {
   category: 'main',
   path: '/',
   parameter: '',
   method: 'get',
   execution: async (req, res, next) => {
      res.sendFile(require('./index.html'))
   },
   error: false 
}