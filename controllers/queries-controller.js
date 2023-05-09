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
    res.status(201).json(await Query.create(req.body));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function detail(req, res, next) {
  res.status(200).json({ message: "hitting queries detail" });
}

async function destroy(req, res, next) {
  res.status(200).json({ message: "hitting queries delete" });
}

module.exports = {
  create,
  index,
  getOne: detail,
  delete: destroy,
};
