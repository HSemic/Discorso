import transformers

class NLPChatBot(object):
    def __init__(self):
        self.nlp = transformers.pipeline("conversational", model="microsoft/DialoGPT-medium")
    def getResponseMessage(self, userInput):
        response = str(self.nlp(transformers.Conversation(userInput), pad_token_id=50256))
        return response[response.find("bot >> ")+6:].strip()
