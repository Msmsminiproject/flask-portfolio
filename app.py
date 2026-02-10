from flask import Flask, render_template, request, redirect, url_for, flash
import smtplib
from email.message import EmailMessage
import os

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY", "portfolio_secret_key")


# ================= HOME PAGE =================
@app.route("/")
def index():
    return render_template("index.html")


# ================= MAIN PAGE =================
@app.route("/main")
def main():
    return render_template("main.html")


# ================= CONTACT FORM =================
@app.route("/contact", methods=["POST"])
def contact():
    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    if not name or not email or not message:
        flash("All fields are required.", "error")
        return redirect(url_for("main"))

    msg = EmailMessage()
    msg["Subject"] = "New Contact Message from Portfolio"
    msg["From"] = os.getenv("EMAIL_USER")
    msg["To"] = os.getenv("EMAIL_USER")
    msg["Reply-To"] = email

    msg.set_content(f"""
New message from your portfolio website

Name: {name}
Email: {email}

Message:
{message}
""")

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(
                os.getenv("EMAIL_USER"),
                os.getenv("EMAIL_PASS")
            )
            server.send_message(msg)

        flash("Message sent successfully!", "success")

    except Exception as e:
        print("Email sending failed:", e)
        flash("Failed to send message. Please try again later.", "error")

    return redirect(url_for("main"))


# ================= RUN APP =================
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
