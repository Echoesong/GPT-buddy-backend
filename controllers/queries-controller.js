const express = require('express')
const { Query } = require('../models/Query')

async function index(req, res, next){
    res.status(200).json({message: "hitting queries index"})
} 

async function create(req, res, next){
    res.status(200).json({message: "hitting queries create"})
} 

async function detail(req, res, next){
    res.status(200).json({message: "hitting queries detail"})
} 

async function destroy(req, res, next){
    res.status(200).json({message: "hitting queries delete"})
} 


	
module.exports = {
    create,
    index,
    getOne: detail,
    delete: destroy
}