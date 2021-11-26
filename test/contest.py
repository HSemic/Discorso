import pytest

from src.app import create_app

discorso = create_app()

@pytest.fixture(fixture_function="client")
def client():
    discorso.config["TESTING"] = True
    with discorso.test_client() as client:
        yield client
