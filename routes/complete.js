module.exports = router => {
  router.get('/complete', (req, res) => {
    res.render('complete.njk');
  });
};
