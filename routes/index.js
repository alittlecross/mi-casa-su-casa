module.exports = router => {
  router.get('/', (req, res) => {
    res.render('paper-claims.njk');
  });
};
