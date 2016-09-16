function verifyUserExists(req, res, next) {
  console.log(req.renderObj);
  if (!req.renderObj.user) {
    res.redirect('/login')
  } else {
    next()
  }
}

module.exports = {
  verifyUserExists
};
