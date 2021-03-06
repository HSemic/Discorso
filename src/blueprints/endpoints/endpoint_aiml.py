from flask import Blueprint, request
import datetime as dt

from flask.json import jsonify
from flask_cors.decorator import cross_origin

from ...security import requires_auth

from ...bots.aiml import AIMLChatBot

aimlBot = AIMLChatBot();

blueprint_aiml = Blueprint('aiml_api', __name__, url_prefix='/aiml')

@blueprint_aiml.route('/', methods=['GET'])
@cross_origin(allow_headers=["Content-Type", "Authorization"])
@requires_auth
def test():
    """
    ---
    get:
      description: Test endpoint for the AIML chatbot
      responses:
        '200':
          description: call successful
          content:
            application/json:
              schema: OutputSchema
      tags:
          - testing
    """
    output = {"message": "This is a test message from the aiml chatbot.", "created_at": dt.datetime.now()}
    return jsonify(output)

@blueprint_aiml.route('/', methods=["POST"])
@cross_origin(allow_headers=["Content-Type", "Authorization"])
@requires_auth
def get_aiml_message():
    """
    ---
    post:
      description: Posts a chat message and returns response from the AIML chatbot
      requestBody:
        required: true
        content:
            application/json:
                schema: InputSchema
      responses:
        '200':
          description: call successful
          content:
            application/json:
              schema: OutputSchema
      tags:
          - chatting
    """

    userInput = request.form.get("userInput");

    if (not(userInput) or userInput == ""):
        return jsonify({"message": "Say something. :D", "created_at": dt.datetime.now()})

    output = {"message": aimlBot.getResponseMessage(userInput), "created_at": dt.datetime.now()}

    return jsonify(output)
