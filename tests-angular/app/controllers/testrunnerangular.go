package controllers

import "github.com/robfig/revel"

type TestRunnerAngular struct {
  *revel.Controller
}

func (c TestRunnerAngular) AngularSeed() revel.Result {
  if revel.RunMode == "dev" {
    return c.Render()
  } else {
    return c.NotFound("No matching route found")
  }
}
