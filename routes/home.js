import express from 'express';
import viewUtils from '../lib/viewUtils';

const router = express.Router();

router.get('/', (req, res) => {
  viewUtils.renderPage(res, 'home');
});

export default router;