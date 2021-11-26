from flask import Blueprint, request
import datetime as dt

from flask.json import jsonify

from ...bots.nlp import NLPChatBot

# nlpBot = NLPChatBot();

blueprint_nlp = Blueprint('nlp_api', __name__, url_prefix='/')

@blueprint_nlp.route('/nlp', methods=['GET'])
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
    output = {"message": "This is a test message from the nlp chatbot."}
    return jsonify(output)

@blueprint_nlp.route('/nlp', methods=["POST"])
def get_nlp_message():
    """
    ---
    post:
      description: Posts a chat message and returns response from the NLP chatbot
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

    # output = {"message": nlpBot.getResponseMessage(message), "created_at": dt.datetime.now()}

    # return jsonify(output)


