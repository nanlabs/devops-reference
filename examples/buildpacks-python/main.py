from termcolor import colored

text = colored("Hello, Buildpacks!", "red", attrs=["reverse", "blink"])

print(text)

