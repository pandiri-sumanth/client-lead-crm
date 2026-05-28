from flask import Flask, request
from flask_cors import CORS
from dotenv import load_dotenv
import os

from db import db

load_dotenv()

app = Flask(__name__)

CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = (
    f"mysql+pymysql://{os.getenv('MYSQL_USER')}:"
    f"{os.getenv('MYSQL_PASSWORD')}@"
    f"{os.getenv('MYSQL_HOST')}/"
    f"{os.getenv('MYSQL_DB')}"
)

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

from models.lead import Lead

with app.app_context():
    db.create_all()


@app.route("/")
def home():
    return {
        "message": "Backend + MySQL Connected"
    }


# CREATE LEAD
@app.route("/leads", methods=["POST"])
def add_lead():

    data = request.json

    new_lead = Lead(
        name=data["name"],
        email=data["email"],
        company=data["company"],
        status=data["status"]
    )

    db.session.add(new_lead)

    db.session.commit()

    return {
        "message": "Lead Added Successfully"
    }


# GET ALL LEADS
@app.route("/leads", methods=["GET"])
def get_leads():

    leads = Lead.query.all()

    return [lead.to_dict() for lead in leads]


# UPDATE LEAD
@app.route("/leads/<int:id>", methods=["PUT"])
def update_lead(id):

    lead = Lead.query.get(id)

    if not lead:
        return {
            "message": "Lead not found"
        }, 404

    data = request.json

    lead.name = data["name"]
    lead.email = data["email"]
    lead.company = data["company"]
    lead.status = data["status"]

    db.session.commit()

    return {
        "message": "Lead Updated Successfully"
    }


# DELETE LEAD
@app.route("/leads/<int:id>", methods=["DELETE"])
def delete_lead(id):

    lead = Lead.query.get(id)

    if not lead:
        return {
            "message": "Lead not found"
        }, 404

    db.session.delete(lead)

    db.session.commit()

    return {
        "message": "Lead Deleted Successfully"
    }


# DASHBOARD STATS
@app.route("/stats", methods=["GET"])
def get_stats():

    total = Lead.query.count()

    contacted = Lead.query.filter_by(
        status="Contacted"
    ).count()

    converted = Lead.query.filter_by(
        status="Converted"
    ).count()

    return {
        "total": total,
        "contacted": contacted,
        "converted": converted
    }


if __name__ == "__main__":
    app.run(debug=True)