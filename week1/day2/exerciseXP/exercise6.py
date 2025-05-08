def make_shirt(size="L",text="I love python"):
    print(f"the size of the shirt is {size} and the text: {text}")
size = int(input("enter size of the shirt :"))
text = input("enter message that should be printed on the shirt :")
print(make_shirt(size,text))

