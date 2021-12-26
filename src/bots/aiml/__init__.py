from aiml import Kernel

from pathlib import Path

BRAIN_FILE = str(Path(__file__).parent / "./brain.dump").replace("\\", "/")
# STARTUP_FILE = str(Path(__file__).parent / "./std-startup.xml").replace("\\", "/")

class AIMLChatBot(object):
    def __init__(self):
        self.k = Kernel()
        self.k.loadBrain(BRAIN_FILE)
    def getResponseMessage(self, userInput):
        return self.k.respond(userInput)
