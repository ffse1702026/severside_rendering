import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import reducers from './reducers';
import { StaticRouter } from 'react-router';
import thunk from 'redux-thunk';
import { getAllProducts } from './actions';

// import Html from './components/Html';
import App from './containers/App';

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('*', async (req, res) => {
  const scripts = ['vendor.js', 'client.js'];

//   const initialState = { initialText: 'rendered on the server' };
    const middleware = [ thunk ];
    const store = createStore(
      reducers,
      applyMiddleware(...middleware)
    )
    // store.dispatch(getAllProducts());

  const appMarkup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );
  const initialState = store.getState();
  const html = ReactDOMServer.renderToStaticMarkup(
    <Html
      children={appMarkup}
      scripts={scripts}
      initialState={initialState}
    />
  );

  res.send(`<!doctype html>${html}`);
});

app.listen(3000, () => console.log('Listening on localhost:3000'));

const Html = ({ children, initialState, scripts }) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <title>Server Side Rendered React App!!</title>
    </head>
    <body>
      <div
        id="app"
        dangerouslySetInnerHTML={{ __html: children }}
      />

       (
        <script
          dangerouslySetInnerHTML={{
            __html: `window.APP_STATE=${JSON.stringify(initialState)}`
          }}
        />
      )

      {scripts.map((item, index) => <script key={index} src={item} />)}
    </body>
  </html>
);
