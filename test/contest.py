import pytest

from src.app import create_app

@pytest.fixture(scope="module")
def client():
    with create_app.test_client() as client:
        yield client
