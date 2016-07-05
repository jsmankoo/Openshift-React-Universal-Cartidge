import express from 'express';
import morgan from 'morgan';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';

import App from './Components/App/App';
import Store from './Store/Store';

// Init express
let app = express();

app.set(`port`, process.env.NODE_PORT || 3000);
app.set(`ip`, process.env.NODE_IP || `localhost`);

app.set(`views`, `./views`);
app.set(`view engine`, `pug`);

app.use(morgan(`dev`));

app.use(express.static(`./public`));

app.get(`/`, function(req, res){
  res.render(`index`, {app: renderToString(
    <Provider store={Store}>
      <App />
    </Provider>
  )});
});

app.listen(app.get(`port`), app.get(`ip`), function(){
  console.log('Application ip ' + app.get(`ip`) + ':' + app.get(`port`));
  console.log('worker ' + process.pid + 'started...');
});
