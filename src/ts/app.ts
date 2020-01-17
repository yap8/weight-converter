import Model from './Model'
import View from './View'
import Controller from './Controller'

const model: object = new Model()
const view: object = new View()
const controller: object = new Controller(model, view)
