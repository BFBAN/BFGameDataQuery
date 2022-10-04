"use strict";
import express from "express";

const router = express.Router();

router.get('/test', async (req, res, next)=>{
  res.status(200).json({ success: 1 });
})

export default router;
