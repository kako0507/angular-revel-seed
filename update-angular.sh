#! /bin/sh
if [ -n "$1" ]; then
  mkdir tmp
  curl https://raw.github.com/angular/code.angularjs.org/master/$1/angular-$1.zip -o tmp/angular.zip
  rm -fr public/lib/angular
  unzip tmp/angular.zip -d public/lib
  mv public/lib/angular-$1 public/lib/angular
  rm -fr public/lib/angular/docs
  mv public/lib/angular/angular-mocks.js tests-angular/public/lib/angular
  mv public/lib/angular/angular-scenario.js tests-angular/public/lib/angular
  cp public/lib/angular/version.txt tests-angular/public/lib/angular

else
  echo "Usage: update-angular <version>"
fi