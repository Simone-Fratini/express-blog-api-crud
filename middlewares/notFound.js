
function notFound(req, res, next) {
  res.status(404).send('Not Found');
  console.log('passaggio da middleware notFound');

}

module.exports = notFound;