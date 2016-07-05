# OpenShift-React-Universal-Cartidge

OpenShift cartridge to get quickly started with a react, redux, universal cartridge.
This boilerplate could be very easily modified as a regular boilerplate.
I tried to keep things at minimum. However I realised I need these libraries for sure.

#### Redux with React-Redux
Redux is by far my favourate and easiest to use library IMO, and using react-redux you can make your app's data unopinionate by allowing data only via props, which in-turn makes your components a function of props only and lets you use a pretty neat performance boost via [shouldComponentUpdate](https://facebook.github.io/react/docs/component-specs.html#updating-shouldcomponentupdate).

#### Stylus with Axis and rupture
At this point I wanted to get a neat way of doing css-reset and some generic css global setup. So I end up with my usual setup of Stylus with Axis (amazing stylus library overall) and Rupture (makes media-queries easy) libraries

#### Radium with color
Since I wanted to make Universal boilerplate, unfortunately I couldn't take the advantage of webpack's local-scope feature. So the choice was either to use classes and regular style stuff or Radium. I gotta say radium is a bit painful at the beginning but as you go along you find it quite neat to use.
For those who haven't tried it [color](https://github.com/qix-/color) is an excellent library to use alongside Radium.
As a note if you do end up using Radium make sure you surround your App Component with Radium's StyleRoot Component.

#### Component Structure
You may use any way to Structure your components as you see fit, but I personally like to structure it in a way so that its super easy for me to *delete* a component.
```
--> Components
  --> FooComponent (Foo Component Folder)
    --> FooComponent.js (Foo Component File)
    --> Styles.js (Foo Component Styles)
    --> SubComponents.js (Any number of Foo SubComponents)
```

## Installation
```
npm install
npm run compile
```

## development
Servers App on localhost:3000 with Hot Module Replacement in place
```sh
npm run server:dev
```

## Production Test

```sh
npm run compile
npm run server
```

## Actualy Production

```sh
npm run start
```
Note: start.js doesn't run in node cause of ES6 syntax. Just run:
```sh
babel-node ./start.js
```
to test. Openshift node:latest picks it up just fine, without any need for babel. You can also try using the node harmony flag I suppose (for testing ofcourse)
