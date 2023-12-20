from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def main():
    return render_template("empty.html")

@app.route("/history")
def history():
    return render_template("time_line.html")

@app.route("/theory")
def theory():
    return render_template("empty.html")

@app.route("/questions")
def questions():
    return render_template("questions.html")

@app.route("/autors")
def autors():
    return render_template("empty.html")


if __name__ == "__main__":
    app.run(debug=True)