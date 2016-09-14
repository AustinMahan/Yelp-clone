const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  const renderObj = {};

});

router.get('/:id', function (req, res, next) {
  const renderObj = {};

});

router.get('/new', function (req, res, next) {
  const renderObj = {};

});

router.get('/:id/reviews', function (req, res, next) {
  const renderObj = {};
  
});

router.get('/:id/edit', function (req, res, next) {
  const renderObj = {};

});

router.get('/:id/review/:revId/edit', function (req, res, next) {
  const renderObj = {};

});

router.get('/:id/reviews/new', function (req, res, next) {
  const renderObj = {};

});

module.exports = router;
