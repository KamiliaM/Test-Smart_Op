const express = require('express');
const req = require('express/lib/request');
const { restart } = require('nodemon');
const router = express();
const cors = require('cors');
const Post = require('../models/Post');

router.use(cors({ origin: 'http://localhost:4200' }));


//GET BACK ALL THE POSTS
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }


});

// router.get('/specific', (req, res) => {
//     res.send('specific post');
// });




//SUBMITS A POSTS
router.post('/', async(req, res) => {
    // console.log(req.body);
    const post = new Post({
        surgeon: req.body.surgeon,
        specialty: req.body.specialty,
        anesthsiste: req.body.anesthsiste,
        nurse1: req.body.nurse1,
        nurse2: req.body.nurse2,
        roomNumber: req.body.roomNumber,
        intervention: req.body.intervention
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }

});

//SPECIFIC POST
router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });

    }
});


//Delete Post 
router.delete('/:postId', async(req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
});



//Update a position
router.patch('/:postId', async(req, res) => {
    try {
        const updatePost = await Post.updateOne({ _id: req.params.postId }, { $set: { specialty: req.body.specialty } });
        res.json(updatePost);
    } catch (err) {
        res.json({ message: err });
    }
});



module.exports = router;