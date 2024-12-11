# Data Binding with D3

## Basic Process (Using D3.js)

1. Bind a set of data to a set of existing visual elements
2. Determine the subset of data that isn’t paired to a visual element and create visual elements for them
3. Determine the subset of the visual elements that don’t have data bound to them and remove them
4. Modify the visual elements to represent the data that is bound to them

## Methods Available

* `selection.data([data[, key]])` - bind data to elements
* `selection.datum([value])` - get or set the data bound to the elements in the selection
* `selection.join(enter,[,update][,exit])` - a convenience method which can be used as an alternative to enter, merge, and exit.
  * `selection.enter()` - get the temporary elements for the data not bound to elements
  * `selection.merge(selection)` - merge this selection with another selection
  * `selection.exit()` - get the elements that are missing data
* `selection.datum([value])` - Gets or sets the bound data for each selected element. Unlike `selection.data`, this method does not compute a join and does not affect indexes or the enter and exit selections.
