## Introduction 
John Conway created a game called ["Life"](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) in the year 1970. It is a zero player game and is played on an infinite grid. The rules are simple. 
1. Each cell in the grid is either alive (white) or dead (black). P.S. No racism intended. 
2. Any dead cell with exactly 3 white neighbors comes to life.
3. And alive cell with less than 2 or more than 3 white neighbors dies. 

These simple rules are applied on the initial arrangement of cells to create subsequent arrangements. The fate of a pattern of cells in this game is **UNDECIDABLE**. This means that there is no possible algorithm that is guaranteed to predict how a pattern will end up (die out, become stable, oscillate, travel till infinity or grow forever) in finite time for all possible patterns.

Based on these rules and similar conditions is the game "SM/Life".

Youtube: [https://youtu.be/68qP1mHWJhU](https://youtu.be/68qP1mHWJhU)

Play here: [https://sm-life.herokuapp.com/](https://sm-life.herokuapp.com/)

![life](https://user-images.githubusercontent.com/55681184/172067448-abcb7625-2e52-4f8d-8264-1beead62b8af.png)

## Objective
Objective of this game is to kill the Human target named "Cello" using attacking patterns using fewest possible moves. The final objective is to try to do so in 1 move only. 

## How to Play
(Note: The "Select Difficulty" feature is not functional) 
On clicking "Play" button, you are presented with the main game screen. It contains the grid with Cello at the bottom center surrounded by defensive objects.

![Screenshot from 2022-06-06 01-03-53](https://user-images.githubusercontent.com/55681184/172067473-5fe4f887-b7e3-4908-8793-c735c39473d3.png)

In each move you have to create offensive patterns that can travel towards Cello in an attempt to kill him. Note that these patterns can only be created near the edges of the grid. For your help, one of the possible offensive pattern is given below.

![Screenshot from 2022-06-06 01-04-55](https://user-images.githubusercontent.com/55681184/172067502-6ad419ba-6ad7-4103-bdd0-1b55dec71069.png)


After you are ready with your pattern, press Play button to make your move. If you end up being unsuccessful, you can click the Pause button to make a new move.

You can also enjoy the original game of life by selecting the practice mode on the home screen.

## Tech Stack
HTML, CSS, JavaScript, Bootstrap, Python, Flask.

## Credits
I would like to thank [Veritasium](https://www.youtube.com/c/veritasium) whose video on [Math's fundamental flaw](https://youtu.be/HeQX2HjkcNo) gave me the idea to create this game.



![Screenshot from 2022-06-05 20-45-41](https://user-images.githubusercontent.com/55681184/172067426-33a732f9-deef-4aaf-8ed4-654a0a1326c5.png)



