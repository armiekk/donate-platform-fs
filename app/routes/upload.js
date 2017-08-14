import Express from 'express';
import { upload } from '../config/config';

const router = Express.Router();

router.post('/image', upload.array('images', 4), (req, res) => {
    res.send('uploaded');
});

router.post('/paper', upload.single('paper'), (req, res) => {
    res.send('uploaded');
});

export const uploadRouter = router;