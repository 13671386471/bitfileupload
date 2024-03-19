import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'node:path';
import fs from 'node:fs';
//1、初始化multer
const storage= multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        console.log('fileName::', req, file);
        cb(null, `${req.body.index}-${req.body.fileName}`)
    }
})
const upload = multer({storage: storage});


const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

// upload.single('file'): upload是 multer({storage: storage})生成的;
// 且('file')是和前端formData.append('file', chunks[i]) 的file对应的
app.post('/upload', upload.single('file'), (req, res)=> {
    console.log('upload::', req);
    res.send('ok');
})

// 切片上传成功后进行合并
app.post('/merge', (req, res)=> {
    console.log('merge::', req.body);
    // 读取目录下的所有切片
    // const files = fs.readdirSync(path.join(__dirname, 'uploads'));
    let uploadDir = path.join(process.cwd(), '/uploads');
    let dirs = fs.readdirSync(uploadDir);
    dirs.sort((a, b) => {
        return a.split('-')[0]- b.split('-')[0]
    });

    const videos = path.join(process.cwd(), 'videos', `${req.body.fileName}.mp4`);
    dirs.forEach(item => {
        console.log('item::', item);
        fs.appendFileSync(videos, fs.readFileSync(path.join(uploadDir, item)))
        fs.unlinkSync(path.join(uploadDir, item))
    })
    console.log('fileee:', dirs);
    res.send('ok');
})


app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
})