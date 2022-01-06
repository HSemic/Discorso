# Discorso, the dual chatbot which implements AIML and NLP technologies

Welcome to Discorso!

This web app is a chatbot with support for both Artificial Intelligence Markup Language (AIML) and Natural Language Processing (NLP) technologies. It runs two chatbots in the backend and allows users to interact with both in real time.

This app is deployed with Netlify and can be accessed here: https://discorso.netlify.app/.

The backend is deployed on Google Cloud and its documentation can be accessed here: https://discorso-6eyj4bjopq-ew.a.run.app/api/docs/. The API is CORS and Auth0 configured to work only with the frontend. To run the app locally, installation steps in the next section can be followed.

## Installation

The app is already deployed and you can use the final product on this [link](https://discorso.netlify.app/). 
If you want to play around with it locally, clone this repo and install the dependencies. Keep in mind that frontend is in the root of this repo.

```
$ git clone https://github.com/HSemic/Discorso.git
$ cd Discorso
```

To run the backend, use the commands outlined below:

```
$ python3 -m venv .venv
$ pip install -r requirements.txt
$ waitress-serve --call 'src.app:create_app'
```

To run the frontend, use the commands below:

```
$ cd frontend
$ npm i
$ npm start
```

An axios instance for localhost will need to be configured to connect to the local API

## Used technologies

The app was built using the [React library](https://reactjs.org/) and bootstrapped using create-react-app.

Code itself was written using [TypeScript](https://www.typescriptlang.org/), a statically typed JavaScript superset.

UI and styling was done using [SASS](https://sass-lang.com/), a CSS preprocessor.

Backend was written using [Flask web framework](https://flask.palletsprojects.com/en/2.0.x/).

## Design

The app is responsive and works on various screen sizes.

The app also has a dark mode switch.

## License

Discorso is released under the [MIT license](https://opensource.org/licenses/MIT).
