const express = require('express');
const Restaurant = require('../models/restaurant');
const restaurant = require('../models/restaurant');
const router = express.Router();

// Create a new restaurant
router.post('/restaurants/save', async (req, res) => {
  try {
    let newRestaurant = new Restaurant(req.body);
    await newRestaurant.save();
    return res.status(200).json({
      success: "Restaurant Saved Successfully"
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message
    });
  }
});

// Get all restaurants
router.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    return res.status(200).json({
      success: true,
      existingRestaurants: restaurants
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message
    });
  }
});

// Get a specific restaurant by ID
router.get('/restaurants/:id', async(req,res) => {
  try{
    const restaurant = await Restaurant.findById(req.params.id,);
    return res.status(200).json({
      success:true,
      oneRestaurant: restaurant
    });
  } catch (err) {
    return res.status(400).json({
      error:err.message
    });
  }
});

// Update a specific restaurant by ID
router.put('/restaurants/update/:id', async (req, res) => {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } 
    );
    if (!updatedRestaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }
    return res.status(200).json({ success: "Updated Successfully", restaurant: updatedRestaurant });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// Delete a specific restaurant by ID
router.delete('/restaurants/delete/:id', async (req,res)=>{
    try{
      const deleteRestaurant = await Restaurant.findByIdAndDelete(req.params.id);
      if(!deleteRestaurant){
        return res.status(404).json({error:"Restaurant not found"});
      }
      return res.status(200).json({success: "Delete Successfully"});
    } catch (err){
        return res.status(400).json({error:err.message});
    }
});

module.exports = router;
