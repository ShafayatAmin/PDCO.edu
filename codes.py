#main.py নামের আরেকটি ফাইলে আপনার নম্বর ইমেল এবং পাসওয়ার্ড দিন

from main import number, email, passworld
a = number + email + passworld
with open("contact.txt", "w") as f:
    f.write(a)

# # Creating a sample file
with open('sample.txt', 'w') as f:
    f.write('Hello, World!\n')
    f.write('Welcome to Python programming.\n')

# Reading the file and printing the output
with open('sample.txt', 'r') as f:  # 'r' mode is used for reading
    content = f.read()  # Read the entire file content
    print(content)  # Print the content to output

