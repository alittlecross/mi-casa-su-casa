module.exports = (router, csrf, casaApp, mountUrl) => {
  router.post('/submit', csrf, (req, res) => {
    console.log(req.casa.journeyContext.data);

    casaApp.endSession(req)
      .catch(err => {
        console.log(err);
      })
      .finally(_ => {
        res.redirect(`${mountUrl}complete`);
      });
  });
};
