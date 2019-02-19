---
title:  Lessons learned from building yet another note taking app. 
date: "2019-02-19T24:00:00.000Z"
image: "./grues.jpg"
---
I started building BrainyDump back in October 2018, I needed a chronological note taking application that allowed me to log entries for
classes, my personal life (such as keeping tracks of my thoughts) and technical subjects such as programming. 
The most important thing about BrainyDump for me was that it had to let me consult journal entries in a chronological way and allow right syntax. Google Keep almost allowed me to do this, but honestly, Google Keep miss any
type of text styling, which means no header or any type of list. I also thought about evernote, but boy o' boy is the tagging system in Evernote bad, the UX is off and creating a note for a tag isn't as frictionless as it should be.

Thinking back, creating a custom solution using Markdown files and a git repository probably would've worked, but I really wanted to be able to use BrainyDump 
on a cellphone. Maybe using Dropbox with different folders per subject and per date would've worked, but I really wanted to build a web platform, so
I did. And so BrainyDump was born, kind of.

## Work out what the prototype will be ahead of time
Use paper, lots of them, draw, take notes, WRITE EVERYHTING. What are you building, why, what will the main pages of your application should look
and feel like. Changing the prototype during development **WILL BE A HUGE WASTE OF TIME*
Know what the final, prototype ready, interface of a part of your software should look like when you build it,
going back and changing what is you already spent a considerable a

## Use frameworks
Building a web app without using a pre-existing web framework in the language of your choice would be considered suicide by most.
Using a javascript framework is also strongly suggested to make developpement as easy as possible. Using a data persistence library such
as [GraphQL](https://www.apollographql.com/) or [ember-data](https://github.com/emberjs/data) is also probably a good idea.BUT, CSS is hard, USE A CSS LIBRARY AND THANK ME LATER. Doing all of your CSS by hand is a considerable time investmenent and I tried doing so, it was a bad idea, please don't do it.

## Choose the right tool for the job.
Sure using a new technology might be interesting, and you might threat your project as a technical learning
project, but if the new technology you want to use make the whole process a whole lot harder, a better idea
would be to build the project with a technology you know and like and learn the technology in another funsies project. The lesson here is: "Use the right tool for
the job" which some Antique Era philosopher could've told you WAY back, but here I am perpetrating the same sins that have been commited thousands of years ago.

## Split big tasks into smaller tasks
It's easy to look at something as a really big thing that will be hard to accomplish, usually there's multiple steps that lead to accomplishing
**big things TM**, don't hesitate to split this **BIG thing** into multiple *small* things. Fininshing a small task is a morale booster and is more
encouraging than working on something big that never seems to end.


## Know who you are selling to
You better have a targeted demographic in mind while building your product.
It's important to have a clear demographic and potential costumer in mind while building your product,
this way you know what to do next to satisfy their needs.


## Going Forward
I recently discovered [Notion](https://www.notion.so) which is a nice little web app that let me create a personal knowledge base and is super nice, I always had trouble
keeping track of everything in my life and [Notion](https://www.notion.so) really helps me keep track myself and my learnings. Notions doesn't allow in a straight forward
way to create a logbook but using tables, it is possible to do so.

# The Most Important Lesson
Get started, stop reading yet another blog post about how to build a MVP, how to make money building a micro SaaS,
how to make A HUNDRED GRAND A YEAR TRAVELLING THE WORLD. The most important advice that anyone will give you is to get
started right away, your idea might suck, your execution might be lacking, but you won't know any of this
if all you do is speculate and keep *preparing* yourself. You're never truly ready for anything, you improvise,
you learn from your mistakes and you get better.

So right now, go on github, create a new git repo, give it the first name that crosses your mind, setup a framework in the language of your choice,
create a KANBAN board on Trello that specifies what are the next steps to finish your MVP. AND TOMORROW OR TODAY, **GET STARTED**.

Good luck, and don't forget to have fun.