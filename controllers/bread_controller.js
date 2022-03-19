const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
  Bread.find().then(foundBreads => {
    res.render('index', {breads: foundBreads, title: 'Index Page'})
  })
  
// res.send(Bread)
})

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})

// EDIT  ex: breads/2/edit
breads.get('/:id/edit', (req, res) => {
  Bread.findById(req.params.id).then(foundBreads => {
    res.render('edit' , {
      bread: foundBreads

    })
  })
})

// SHOW
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
      .then(foundBreads => {
          res.render('show', {
              bread: foundBreads
          })
      }).catch(err => {
        res.render('404')
      })
})

// CREATE
breads.post('/', (req, res) => {
  const hasImage = req.body.image;
  if (!hasImage) {
    req.body.image = undefined
    console.log('Body', req.body)
    //req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})

// DELETE breads/:id
breads.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id).then(deletedBread => {
    res.status(303).redirect('/breads')
  })
})
  
// UPDATE breads/:id
breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(updateBread => {
    console.log(updateBread);
    res.redirect(`/breads/${req.params.id}`)
  })
})


module.exports = breads