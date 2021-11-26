"""OpenAPI v3 Specification"""

# apispec via OpenAPI
from apispec import APISpec
from apispec.ext.marshmallow import MarshmallowPlugin
from apispec_webframeworks.flask import FlaskPlugin
from marshmallow import Schema, fields

# Create an APISpec
spec = APISpec(
    title="Discorso - chatbot",
    description="Web app which implements AIML and NLP - based chatbots and enables interaction with them",
    version="1.0.0",
    openapi_version="3.0.3",
    plugins=[FlaskPlugin(), MarshmallowPlugin()],
)

# Define schemas
class InputSchema(Schema):
    userInput = fields.String(description="A string representing user's chat message.", required=True)

class OutputSchema(Schema):
    message = fields.String(description="A string representing chat message generated by the chatbot.", required=True)
    created_at = fields.String(description="Date and time when the corresponding chat message was generated", required=True)

# register schemas with spec
spec.components.schema("Input", schema=InputSchema)
spec.components.schema("Output", schema=OutputSchema)

# add swagger tags that are used for endpoint annotation
tags = [
            {
                'name': 'testing functions',
                'description': 'For testing the API.'
            },
            {
                'name': 'chatting functions',
                'description': 'For processing user chat messages and returning bot-generated outputs'
            },
       ]

for tag in tags:
    print(f"Adding tag: {tag['name']}")
    spec.tag(tag)