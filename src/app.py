from flask import Flask, jsonify

from src.blueprints.endpoints import endpoint_aiml, endpoint_nlp
from src.blueprints.endpoints.endpoint_swagger import swagger_ui_blueprint, SWAGGER_URL

from src.api_spec import spec

from . bots.aiml import AIMLChatBot
from . bots.nlp import NLPChatBot

aimlBot = AIMLChatBot()
nlpBot = NLPChatBot()

def create_app():
    app = Flask(__name__)
    app.register_blueprint(endpoint_aiml.blueprint_aiml)
    app.register_blueprint(endpoint_nlp.blueprint_nlp)

    app.register_blueprint(swagger_ui_blueprint, url_prefix=SWAGGER_URL)

    with app.test_request_context():
        # register all swagger documented functions here
        for fn_name in app.view_functions:
            if fn_name == 'static':
                continue
            view_fn = app.view_functions[fn_name]
            spec.path(view=view_fn)

    @app.route("/api/swagger.json")
    def create_swagger_spec():
        return jsonify(spec.to_dict())

    return app
    
  

# if __name__ == "__main__":
#     app.run()
