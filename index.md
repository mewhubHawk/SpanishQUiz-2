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

***
# 1 Introduction

We're going to be using a website called www.repl.it to have fun with Python.

* Open repl.it in a new tab [repl.it/languages/Python](http://repl.it/languages/Python)

![Imgur](http://i.imgur.com/l3EsgJk.png)

Remember to test and save your work after every change by pressing the buttons in the top bar regularly:

* click *run* at the top left - did you get what you expected?
  * press this every time you want to see what your code does 
  * this should then appear in modal form labelled 'Tk'

* click *save* at the top left - no URL this time :/
  * the first time you will need to give a file name
  * save the file to a memory stick if you need to transport it

***
# 2 Playing with Strings

Python is fun and a lot of it just makes sense!

You have spent all your school life writing and so have expectations about what words and sentences (called character strings in programming) can do. 

Copy these into repl.it and see what happens.

```
# 'greetings' is a variable
greetings="hello katia"

print(greetings)
```

'for' is a way of repeating things in Python.

```
# 'x' is a loop counter
# 'range' is a function to count to 3 or any other amount
for x in range(3):
   print(greetings)
```

```
# 'letter' is a variable holding each letter in greetings
for letter in greetings:
     print(letter)
```

You can also count letters.

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

***
# 3 Input

'input' is a function for getting a response from the user.

```
# 'response' is a variable for storing the value of the response
# you could call it *anything*
response = input(greetings)
for x in range(4):
   print(response)
```

You can use 'input' as often as you like.

```
# just to prove you can call it 'anything'
anything1 = input("tell me anything 1")
anything2 = input("tell me anything 2")
anything3 = input("tell me anything 3")
anything4 = input("tell me anything 4")
anything5 = input("tell me anything 5")
anything6 = input("tell me anything 6")
anything7 = input("tell me anything 7")
anything = input("tell me anything 8")
```

```
print(anything1.capitalize())

for x in range(20):
  print(anything)
```

***
# 4 Question and Answers


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
'''

'''
for question, answer in questions.items():
  response = input("What is the capital of %s?\n--->" % question)
  if response.capitalize() != answer:
    print("No, the capital of %s is %s." % (question, answer))
  else:
    print("Yes, that's correct!")
    score+=1
'''
'''
numberofquestions = len(questions)
percent = ( 100 * score / numberofquestions )
print( "Out of %d questions!" % numberofquestions )
print( "You got %d%% (out of %d questions)!" % (percent, numberofquestions) )

```

***
# 5 More Questions


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

***
# 6 Good programming style

* To program like a Pythonista
  * make variables instead of the magic numbers

This is what my code looks like:


I added another variable to count the number of hits on the pizza base, because it's a really cool way of calculating pi.

***
# 7 Remember to run and save your work

Files and IDEs allow you to save your work, and let you run it at the press of a key.

John Reeves

* john@de-velopment.com
* www.programming-uk.com
* www.twitter.com/programming_uk
