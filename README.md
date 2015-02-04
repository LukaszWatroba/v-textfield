# User-friendly text fields in AngularJS

You can use it for showing/hiding validation messages, error/success input indicators, or interactive [Float Labels](http://bradfrost.com/blog/post/float-label-pattern/).


## Demos

  - [GitHub](http://lukaszwatroba.github.io/v-textfield)


## Installation

  - Use [bower](http://bower.io/) `bower install v-textfield`, or download files [from the github repo](./dist)
  - Reference `v-textfield.css` and `v-textfield.js` in your index.html file
  - Reference the module in your app: `angular.module('myApp', [ 'vTextfield' ])`


## Usage

```html
<v-textfield class="Textfield--default">
  <label hint="Optional">Name</label>
  <input name="myName" type="text" ng-model="model.myName" v-textfield-input>
</v-textfield>

<v-textfield class="Textfield--default">
  <label>Email</label>
  <input name="myEmail" type="email" ng-model="model.myEmail" required v-textfield-input>

  <ng-messages for="myForm.myEmail.$error">
    <ng-message when="email">Please enter a valid email address.</ng-message>
    <ng-message when="required">You did not enter a email address.</ng-message>
  </ng-messages>
</v-textfield>

<v-textfield class="vTextfield--default">
  <label>Password</label>
  <input name="myPassword" type="password" ng-model="model.myPassword" ng-minlength="6" required v-textfield-input>

  <ng-messages for="myForm.myPassword.$error">
    <ng-message when="minlength">Your password is too short.</ng-message>
    <ng-message when="required">Please enter a password.</ng-message>
  </ng-messages>
</v-textfield>
```


## How it works

It basicly adds the following classes to the `v-textfield` element:

- `is-focused`
- `is-blured`
- `is-valid`
- `is-invalid`
- `is-dirty`
- `is-pristine`
- `is-required`
- `is-optional`
- `has-value`
- `has-noValue`
- `has-placeholder`
- `has-noPlaceholder`

