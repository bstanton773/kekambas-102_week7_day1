# my_string = 'My age is '
# my_age = 45

# added_string =  my_age + my_string
# print(added_string)

print(5 == 5)
print(5 == 5.0)
print(5 == '5')


# Ternary
age = 30

age_group = 'Senior' if age > 65 else 'Adult' if age > 18 else 'Child'
print(age_group)

colors = ['red', 'pink', 'purple', 'green', 'yellow']

for i in range(len(colors)):
    print(i, colors[i])


# while True:
#     ask = input('What are you doing? ')
#     while ask not in {'quit'}:
#         ask = input('What are you doing? ')
#     if ask == 'quit':
#         break


try:
    age = int(input('What is your age? '))
    print(f"In 5 years you will be {age / 0 } years old")
except TypeError:
    print('There was an issue dealing with TypeError')
except:
    print("There was an issue but not a TypeError")


print('Hello World')




