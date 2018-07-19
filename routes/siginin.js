import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.set('Content-Type', 'text/html; charset="utf-8"');
  res.render('signin');
});

export default router;
