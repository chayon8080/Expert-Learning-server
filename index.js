const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors());
const catagories = require('./catagories.json');
const course = require('./Course.json')
app.get('/', (req, res) => {
    res.send('Course API Running')
});
app.get('/course-catagories', (req, res) => {
    res.send(catagories)

});
app.get('/catagory/:id', (req, res) => {
    const id = req.params.id;
    const catagorycourse = course.filter(n => n.category_id === id);
    res.send(catagorycourse)
});
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedcourse = course.find(n => n._id === id);
    res.send(selectedcourse)
});
app.get('/course', (req, res) => {
    res.send(course)
})
app.listen(port, () => {
    console.log('Expert Learning is runnig', port)
})