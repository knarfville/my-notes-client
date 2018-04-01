# MyNotesClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

This app will connect to the [MyNotes RESTful API](https://github.com/knarfville/my-notes-rest-server) which serves as the backend for the creation and persistence of notes. If you are going to run both this client and the REST Api server on the same machine, you will probably get the dreaded CORS exception

`Failed to load http://localhost:8080/notes: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:4200' is therefore not allowed access.`

To get around this, simply run Chrome without web security by following instructions from this [link](https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome). Of course, this is only done for development purposes. The CORS exception will have to be handled properly in PROD environment.  

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## TODO's

1. Form validation needs some work. It needs to be more granular and has to display specific validation errors.
2. No unit and end-to-end tests. 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
