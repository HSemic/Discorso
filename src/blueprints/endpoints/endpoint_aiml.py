from flask import Blueprint, request
import datetime as dt

from flask.json import jsonify

from ...bots.aiml import AIMLChatBot

aimlBot = AIMLChatBot();

blueprint_aiml = Blueprint('aiml_api', __name__, url_prefix='/')

@blueprint_aiml.route('/aiml', methods=['GET'])
def test():
    """
    ---
    get:
      description: test endpoint
      responses:
        '200':
          description: call successful
          content:
            application/json:
              schema: OutputSchema
      tags:
          - testing
    """
    output = {"message": "This is a test message from the aiml chatbot."}
    return jsonify(output)

@blueprint_aiml.route('/aiml', methods=["POST"])
def get_aiml_message():
    """
    ---
    post:
      description: posts a chat message and returns response from the AIML chatbot
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
      parameters:
        - in: body
          name: userInput
          description: A chat message sent by the user
          schema: InputSchema
      tags:
          - chatting
    """

    message = request.form.get("userInput");

    if (not(message) or message == ""):
        return jsonify({"message": "Say something. :D", "created_at": dt.datetime.now()})

    output = {"message": aimlBot.getResponseMessage(message), "created_at": dt.datetime.now()}

    return jsonify(output)
