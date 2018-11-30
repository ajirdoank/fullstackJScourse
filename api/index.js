import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send({data: 'just somthing like this'});
});

export default router;
