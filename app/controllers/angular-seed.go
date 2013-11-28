package controllers

import "github.com/robfig/revel"

type AngularSeed struct {
  *revel.Controller
}

func (c AngularSeed) Index() revel.Result {
  return c.Render()
}