# What does the economic complexity index look like near GDP per capita and GINI?

## Intro

This is a project to focus on how to develop African economies (with all its weakness and strenghs). The Economic Complexity Index is chosen as a tool to understand sub-Saharan countries. But the ECI is complex: it tries to assess how the economy of a country is developed and its potential to breach into other areas of economic activity. 

The UNDP report tries to use it with other indexes such as the log of GDP as a way to see correlations and understand its behavior, but maybe there's a chance to translate its effects in real world with variables that are closer to real-life experiences. Hence, we intersect the ECI with not only its log of GDP per capita, but also the GINI. Here we have a 3-pointed index, pointing out different traits for each Country: their techincal abilities, their abundance and its effect on society.

The visualization has two features: it uses a slopegraph to see how the GDP per capita, ECI and GINI are connected in a country. It also shows, as a secondary feature, the time series for each of of those indexes for the Country selected.

[Here's the final visualization.](https://mczoloft.github.io/major-studio-01/assignments/04UserCases/)

#### Sketch for the project
![alt text](sketch.jpg 'Sketch 2')
https://mczoloft.github.io/major-studio-01/assignments/04UserCases/

#### Sources

World Bank national accounts data, and OECD National Accounts data files.

World Bank, Development Research Group

Povcal
http://iresearch.worldbank.org/PovcalNet/home.aspx

Observatory of Economic Complexity
https://atlas.media.mit.edu/en/rankings/country/eci/

#### Coding

[Done with d3.js](https://d3js.org/)

Many thanks to [Gabriel Gianordoli](http://gianordoli.com), who has helped with the bar chart; it was adapted from his class at Parsons. [Here's the code](https://github.com/gianordoli/dataviz_spring_2016/tree/master/lesson_09_d3_transitions_update).

#### Special thanks
To [Fernanda Didini](http://fdidini.com/), for helping with research and design questions, and for being so patient. 
To Gabriel, for the code and techincal support!
To [Daniel Sauter](http://danielsauter.com/gallery.php), for guiding us through the Major Studio class where this was developed/
To [Will Su](https://www.behance.net/suj1977a0f), for helping everyone and bringing many good examples.
All of my coleague at this course, for their words of support. Their amazing work can be seen [here](https://visualizedata.github.io/undp-inequality-trends/index.html)