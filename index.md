#Python Pizza worksheet

righto, how do i fit the quizz speech in here.

##Task 1 - Why Python?

* one of the top two languages in the world, javascript for the web 'front end', python for everything else (almost). 
  * it is used by NASA, Google, Gimp, Minecraft, and Microsoft Office. 
* my project has a million lines of Ada & C, and 3 million lines of Python to prove it!

**Python can be run from the command line, from an desktop IDE, or from an online IDE** 

It is useful to try all of them to find out which you prefer.

**Start a command line prompt using ```cmd```**

* You can find out the version of python by typing ```python --version```.
  * 2.7.x means you have Python 2 installed
  * 3.5.x means you have Python 3 installed

**Type ```python``` to give the ```>>>``` prompt**

* Python is now running!

![Imgur](http://i.imgur.com/Pjii5Qo.png)

***

##Task 2 - Batteries included

**Everything in Python is an ```object```, with a uniform interface.**

Which means everything you make comes with functions built in, and anything you might like to try probably has a library to help.

You already know about ```classes``` and ```objects```, just not in a programming sense: 
* *you* are an instance of the class `boy` or of the class `girl`, 
* *you* come with a bunch of attributes that you can do just like every other boy or girl, 
* and *you* have attributes special to you - called ```overriding```.
  * an object is an instance of a class, where an class is some sort of abstraction of a category of things!

**You have spent all your school life writing and so have expectations about what character strings can do.**

Let's play with your name:

```
name = "your name"
```

**```"your name"``` is a string that we have labelled ```name```**

As a string object, it comes with methods and attributes:
```
"your name".capitalize()
```

Gives the same result as 
```
name.capitalize()
```

You can also count letters:

```
len("your name")
```

![Imgur](http://i.imgur.com/NKvo0HG.png)

Or talk about the n'th character:

```"your name"[3]```

Array indexing is interesting in Python, so you can do this:

```"your name"[0:3:1]```

Where:
* 0 is the start
* 3 is the end
* 1 is the step length

What does ```"your name"[::-1]``` do?


**Things in Python have behaviour defined by Python, by the package it belongs to, and by programs that you write.**

***

##Task 3 - A graphics app

There are lots of graphics packages for Python, 
* Tkinter is one of the oldest. 
* The name ```Tkinter``` is the Python interface to Tk, a cross-platform graphics toolkit, embedded in many applications, from engineering and design to office applications.

* *This is a basic Tkinter template for making a graphics app:**
  * import the libraries
  * create the top level object
  * attach a canvas
  * draw things
  * pack the canvas
  * run the mainloop

*Some of the steps may be hidden by the package, but it is useful to keep remembering the basic template*

Here is some code to make a basic Python pizza:

```python
# import libraries
from Tkinter import * 

# create the top level Tk object
window=Tk()
window.title("a window")

# create the canvas
canvas = Canvas(window, height=600, width=600)

# draw stuff on the canvas
# first the pizza base
canvas.create_oval(200,200,300,300,fill="brown")

# draw some more stuff
# this might be the tomato sauce toppings
# now add your cheese and anything else, before we get to the pepperoni

# pack the canvas and run the Tk mainloop
canvas.pack()
window.mainloop()
```

![Imgur](http://i.imgur.com/Zmr8WLb.png)

***

##Task 4 - Running and saving your work

Files and IDEs allow you to save your work, and let you run it at the press of a key.

Remember to test and save your work after every change!

* click *run* at the top left - did you get what you expected?
  * press this every time you want to see what your code does 
  * this should then appear in modal form labelled 'Tk'

* click *save* at the top left - no URL this time :/
  * the first time you will need to give a file name
  * save the file to a memory stick if you need to transport it

***

##Task 6 - Things to add to your Pizza

* Making the base
  * Note - the numbers give a bounding box for the oval

```python
canvas.create_oval(50,50,450,450,fill="brown")
```
  
* Putting tomato sauce on the base
  * Note - there is no opacity in a tk canvas, so the layers are important

```python
canvas.create_oval(65,65,435,435,fill="red")
```

***

##Task 7 - Random toppings

* look up what other toppings, we can have more shapes and colours
  * http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/index.html

* we can also add them in random places, try this for pepperoni!

```python
colours = ["red", "orange", "yellow", "green", "blue", "purple"]

# create some pepperoni - random 3 places
for x in range(15):
    rndX = randint(0,600)
    rndY = randint(0,400)
    rndCol = randint(0, (len(colours)-1))
    canvas.create_oval(rndX,rndY,rndX+50,rndY+50,fill=colours[rndCol])

```

##Task 8 - Good programming style

* To program like a Pythonista
  * make variables instead of the magic numbers

This is what my code looks like:

![Imgur](http://i.imgur.com/H2i5eBA.png)


I added another variable to count the number of hits on the pizza base, because it's a really cool way of calculating pi.

(http://www.smac.lps.ens.fr/index.php/Program:Direct_pi)

***

Remember to save your file and put it on a memory stick - we will be animating our pizza next week!


 
John Reeves

* john@de-velopment.com
* www.programming-uk.com
* www.twitter.com/programming_uk
