from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import hashlib

config = {
  'user': 'root',
  'passwd': '',
  'host': 'localhost',
  'database': 'proyecto_ney'
}

app = Flask(__name__)
CORS(app)

#################################
#								#
#		ACCOUNT CONECCTION		#
#								#
#################################
@app.route("/showAllAccount", methods=['GET'])
def ShowAllAccount():

	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor(buffered=True)

	sql = "SELECT * FROM account;"
	mycursor.execute(sql)
	row = mycursor.fetchone()

	items = {}
	acc = []
	while row is not None:
		x = {}
		x["name"] = row[0]
		x["amount"] = row[1]
		acc.append(x)
		row = mycursor.fetchone()

	items["items"] = acc
	return jsonify(items), 200