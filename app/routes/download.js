import Express from 'express';
import path from 'path';

const router = Express.Router();

router.get('/images/:postId/:fileName', (req, res) => {
    let { postId, fileName } = req.params;
    res.sendFile(path.resolve('assets', 'images', postId, fileName));
});

router.get('/paper/:postId/:fileName', (req, res) => {
    let { postId, fileName } = req.params;
    res.sendFile(path.resolve('assets', 'paper', postId, fileName));
});

export const downloadRouter = router;