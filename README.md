# User-friendly form validation in AngularJS


## Demos

  - [GitHub](http://lukaszwatroba.github.io/v-textfield)


## Installation

  - Use [bower](http://bower.io/) `bower install v-textfield`, or download files [from the github repo](./dist)
  - Reference `v-textfield.css` and `v-textfield.js` in your index.html file
  - Reference the module in your app: `angular.module('myApp', [ 'vTextfield' ])`


## Usage

```html
<form name="myForm" novalidate>

  <div class="Textfield Textfield--default" v-textfield>
    <label class="Textfield-label">Email</label>
    <input class="Input Input--default" name="myEmail" type="email" ng-model="model.myEmail" required v-textfield-input>

    <ul class="Textfield-messages" ng-messages="myForm.myEmail.$error">
      <li class="Textfield-message" ng-message="email">Please enter a valid email address.</li>
      <li class="Textfield-message" ng-message="required">You did not enter a email address.</li>
    </ul>
  </div>

</form>
```