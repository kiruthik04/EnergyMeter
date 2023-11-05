import razorpay
from github import Github

# Razorpay API credentials
razorpay_key_id = 'rzp_test_ET6oqw4dDdF8P3'
razorpay_key_secret = 'QbSzq5oYmlfR081gUGf38zv0'

# GitHub credentials
github_username = 'kiruthik04'
github_repo = 'EnergyMeter'
github_token = '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'

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
