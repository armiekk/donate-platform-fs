import Multer from 'multer';
import path from 'path';
import fs from 'fs';

const storage = Multer.diskStorage({
    destination: (req, file, cb) => {
        let postId = file.originalname.split('-')[0];
        let dirPath = path.resolve('assets', file.fieldname, postId);
        console.log(fs.existsSync(dirPath));
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }
        cb(null, dirPath);
    },
    filename: (req, file, cb) => {
        let fileName = file.originalname.split('-')[1];
        cb(null, fileName);
    },
});

export const upload = Multer({ storage });