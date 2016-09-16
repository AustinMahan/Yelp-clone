function verifyUserExists(req, res, next) {
  if (!req.renderObj.user) {
    res.redirect('/login')
  } else {
    next()
  }
}

module.exports = {
  verifyUserExists
};
