# Python Text worksheet

righto, how do i fit the quizz speech in here.

possibly best to put the 'problem' part as a link-out?

just make the 'solution' to satisfy the schools' requirements:

task 1
* use repl.it
  * instructions for use?
  * input, choice, output
* eg what is you name
  * say hello
  
task 2
* making a quizz with if/then & input
* making the quizz with an if/else if ladder
  * debugging exercise

task 3
* wait: there's gotta be a better way
  * explain why debugging is hard
* number of lines of code, complexity & the human error rate

task 4
* put all the questions in one place
* just if/then & input once
* now each question adds 1 line to the dictionary

task 5
* put the questions in a separate file
  * schools ask for it / useful skill
* choice which quizz to run

task 6
you have learnt a lot
* clean programming: dry, separation of concerns
  * data structure & algorithm
  * external files & reading in the data
* classes


# 1 INTRODUCTION

## We're going to be using a website called www.repl.it to have fun with Python.

* Open repl.it open in a new tab) [repl.it/languages/Python](http://repl.it/languages/Python)

Press the buttons in the top bar regularly:

* Run - when you want to test your code

* Save - when you think it works and you wanna share


![Imgur](http://i.imgur.com/l3EsgJk.png)


## Task 1 - Why Python?

Python is fun and a lot of it just makes sense!

open ![repl.it](https://repl.it) in a new tab and start a new python project.

Everything in Python is an ```object```, with a uniform interface. Which means everything you make comes with functions built in, and anything you might like to try probably has a library to help.

You already know about ```classes``` and ```objects```, just not in a programming sense: 
* *you* are an instance of the class `boy` or of the class `girl`, 
* *you* come with a bunch of attributes that you can do just like every other boy or girl, 
* and *you* have attributes special to you - called ```overriding```.
  * an object is an instance of a class, where an class is some sort of abstraction of a category of things!

## Task 2 - input, processing, and output

You have spent all your school life writing and so have expectations about what words and sentences (called character strings in programming) can do.

```
# 'greetings' is a variable
greetings="hello katia"

# 'x' is a loop counter
# 'range' is a function to count to 3 or any other amount
for x in range(3):
   print(greetings)

   # 'for' is a loop in python
   # 'letter' is a variable holding each letter in greetings
   for letter in greetings:
     print(letter)

# 'input' is a function for getting a response from the user
# 'response' is a variable for storing the value of the response
# you could call it *anything*
response = input(greetings)
for x in range(4):
   print(response)

# just to prove you can call it 'anything'
anything1 = input("tell me anything 1")
anything2 = input("tell me anything 2")
anything3 = input("tell me anything 3")
anything4 = input("tell me anything 4")
anything5 = input("tell me anything 5")
anything6 = input("tell me anything 6")
anything7 = input("tell me anything 7")
anything = input("tell me anything 8")

print(anything1.capitalize())

for x in range(20):
  print(anything)
```

You can also count letters:

```
len("your name")
```

Or talk about the n'th character:

```"your name"[3]```

Array indexing is interesting in Python, so you can do this:

```"your name"[0:3:1]```

Where:
* 0 is the start
* 3 is the end
* 1 is the step length

What does ```"your name"[::-1]``` do?




## Task 3 - Running and saving your work

Files and IDEs allow you to save your work, and let you run it at the press of a key.

Remember to test and save your work after every change!

* click *run* at the top left - did you get what you expected?
  * press this every time you want to see what your code does 
  * this should then appear in modal form labelled 'Tk'

* click *save* at the top left - no URL this time :/
  * the first time you will need to give a file name
  * save the file to a memory stick if you need to transport it



## Task 4 - Questions & Answers

* Making the base
  * Note - the numbers give a bounding box for the oval

```python
score=0

questions=\
  {
  "England":"London",
  "Spain":"Madrid",
  "France":"Paris",
  "Portugal":"Lisbon"
  #add more questions
}

for question, answer in questions.items():
  response = input("What is the capital of %s?\n--->" % question)
  if response.capitalize() != answer:
    print("No, the capital of %s is %s." % (question, answer))
  else:
    print("Yes, that's correct!")
    score+=1

numberofquestions = len(questions)
percent = ( 100 * score / numberofquestions )
print( "Out of %d questions!" % numberofquestions )
print( "You got %d%% (out of %d questions)!" % (percent, numberofquestions) )

```
  
* Putting tomato sauce on the base
  * Note - there is no opacity in a tk canvas, so the layers are important

```python
canvas.create_oval(65,65,435,435,fill="red")
```



## Task 5 - More Questions

* look up what other toppings, we can have more shapes and colours
  * http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/index.html

* we can also add them in random places, try this for pepperoni!

```python
score=0

questions=\
  {
  "England":"London",
  "Spain":"Madrid",
  "France":"Paris",
  "Portugal":"Lisbon"
  #add more questions
}

for question, answer in questions.items():
  response = input("What is the capital of %s?\n--->" % question)
  if response.capitalize() != answer:
    print("No, the capital of %s is %s." % (question, answer))
  else:
    print("Yes, that's correct!")
    score+=1

numberofquestions = len(questions)
percent = ( 100 * score / numberofquestions )
print( "Out of %d questions!" % numberofquestions )
print( "You got %d%% (out of %d questions)!" % (percent, numberofquestions) )

```

## Task 6 - Good programming style

* To program like a Pythonista
  * make variables instead of the magic numbers

This is what my code looks like:


I added another variable to count the number of hits on the pizza base, because it's a really cool way of calculating pi.

***

Remember to save your file and put it on a memory stick - we will be animating our pizza next week!

John Reeves

* john@de-velopment.com
* www.programming-uk.com
* www.twitter.com/programming_uk
