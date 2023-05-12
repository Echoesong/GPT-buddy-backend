const express = require("express");
const { Query } = require("../models");

async function index(req, res, next) {
  try{
    res.status(200).json(await Query.find())
  } catch(err){
    res.status(400).json({error: err.message })
  }
}

async function create(req, res, next) {
  try {
    const queryData = {
      ...req.body,
      response: req.completionResult,
    }
    console.log('req.completionResult:', req.completionResult)
    console.log('query data:', queryData)
    res.status(201).json(await Query.create(queryData));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function detail(req, res, next) {
  res.status(200).json(await Query.findById(req.params.id));
}

async function destroy(req, res, next) {
  res.status(200).json(await Query.findByIdAndRemove(req.params.id));
}

module.exports = {
  create,
  index,
  getOne: detail,
  delete: destroy,
};
