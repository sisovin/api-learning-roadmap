from flask import Flask

def create_app():
    app = Flask(__name__)

    # Register blueprints or routes here
    # Example: app.register_blueprint(your_blueprint)

    return app
