import os
from dotenv import load_dotenv
import razorpay
from github import Github

load_dotenv()

# Razorpay API credentials
razorpay_key_id = os.getenv('RAZORPAY_KEY_ID')
razorpay_key_secret = os.getenv('RAZORPAY_KEY_SECRET')

# GitHub credentials
github_username = os.getenv('GITHUB_USERNAME')
github_repo = os.getenv('GITHUB_REPO')
github_token = os.getenv('GITHUB_TOKEN')

# Initialize Razorpay client
client = razorpay.Client(auth=(razorpay_key_id, razorpay_key_secret))

# Fetch Razorpay transactions (modify this to your requirements)
transactions = client.payment.fetch_all()  # You may need to add filters or customize this

# Initialize GitHub client
g = Github(github_token)
user = g.get_user()
repo = user.get_repo(github_repo)

# Create a new file in the GitHub repository
file_contents = "Transaction Data: {}".format(transactions)
file_path = "transactions.txt"

try:
    repo.create_file(file_path, "Commit message", file_contents)
    print("Transaction data pushed to GitHub successfully.")
except Exception as e:
    print(f"Error: {str(e)}")
