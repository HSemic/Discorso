def test_square(client):
    data = client.get("/aiml")
    assert data["message"] == "This is a test message from the nlp chatbot."

def test_square(client):
    data = client.get("/nlp")
    assert data["message"] == "This is a test message from the nlp chatbot."
