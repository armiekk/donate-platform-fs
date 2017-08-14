import Express from 'express';
import  { uploadRouter } from './routes/upload';
import  { downloadRouter } from './routes/download';

const app = Express();

app.use('/api/upload', uploadRouter);
app.use('/api/download', downloadRouter);

app.listen(5000, () => {
    console.log('App listen on port 5000.');
});