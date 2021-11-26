from src.app import create_app;

discorso = create_app()

if __name__ == "__main__":
    discorso.run(host='0.0.0.0', debug=True)