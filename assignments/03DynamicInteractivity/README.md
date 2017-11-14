# Assignment 03
*Dynamic and Interactivity for Major Studio 01 – Fall 2017 – MSc Data Visualization*

Here are the ideas for this assignment.

___

### Intro

This is a project where we come up with a research question that binds together the 2 previous assignments. We use the **quantitative** approach from Exercise #1 and try to apply it to the Exercise #2 problems and issues.

But what are these issues? By picking Chapter 5 from the *Income Inequality Trends in sub-Saharan Africa*, the focus is on how to develop African economies (with all its weakness and strenghs). The author chooses the Economic Complexity Index as a tool to understand sub-Saharan countries. (Needs more clarity)

The ECI, though, is a black box; even with a whole box trying to unpack its logic, it's a pretty difficult concept. The authors try to use it with other indexes such as the log of GDP as a way to see correlations and understand its behavior, but maybe there's a chance to translate its effects in real world with variables that are closer to real-life experiences.

Hence, we intersect the ECI with not only its GDP per capita, but also the GINI. Here we have a 3-pointed index, pointing out different traits for each Country: their techincal abilities, their abundance and its effect on society.

## Getting to see all of this (sketches and iterations)

To visualize these indexes and get some sort of understanding from them, I've then sketched out some ideas where I could translate 3 simple numeric values into graphical indexes. 

#### Sketch 1
![alt text](https://raw.githubusercontent.com/mczoloft/major-studio-01/2d6901dc02a109b16b450f8d22e6e615a58f23a8/assignments/03DynamicInteractivity/_Assets/sketch1.jpg 'Sketch 1')
This is going for a small-multiple view of n-Countries so far. As the basic graphic unit in our viz, we use a Polar-Chart-like structure; we try to normalize them with max. values within that data range. For the GDP we also would need extra-space to unpac a log-like scale.

#### Sketch 2
![alt text](https://raw.githubusercontent.com/mczoloft/major-studio-01/2d6901dc02a109b16b450f8d22e6e615a58f23a8/assignments/03DynamicInteractivity/_Assets/sketch2.jpg 'Sketch 2')
This is simpler and close to what UNDP saw as interesting. We try to plot the data as a Bubble Chart: a scatterplot where each circle has their area defined by a 3rd variable. We plot the LogGDP in the y-axis, the GINI in the x-axis, and use the ECI to plot the size of every Country.

#### Sketch 3
![alt text](https://raw.githubusercontent.com/mczoloft/major-studio-01/2d6901dc02a109b16b450f8d22e6e615a58f23a8/assignments/03DynamicInteractivity/_Assets/sketch3.jpg 'Sketch 3')
Here we try a mash-up: we use a scatterplot and also a slopegraph. The idea is to map the first and the last ECI logged for each Country, and connect them with a line. This line could, them, inherit graphical styles mapped by the other two variables (GINI and GDP per capita). Needs more sketching, but has the benefit of bringing also time into the analysis.

## Prototyping and development

#### Structure and visuals
Dummy text

#### Interactivity
Dummy text

## Data specifications and practices

Here is what I did with the data (modelling and database); what are the sources and how to get from there to the question.