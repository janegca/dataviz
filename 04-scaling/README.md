# Scaling

Scaling functions are used to convert data values in one domain range to values in another domain range.

D3 has 4 scale types:

* Continuous - numeric, can use the following functions:
  * `d3.scaleLinear()`
  * `d3.scalePow()`
  * `d3.scaleSqrt()`
  * `d3.scaleLog()`
  * `d3.scaleTime()`
  * `d3.scaleUtc()`
* Sequential - numeric, create a continuous range using a given 'interpolator'
  * `d3.scaleSequential(interpolator)` [Interpolate Documention](https://d3js.org/d3-interpolate)
* Quantized - numeric, continuous within discrete range (partitioned)
  * `d3.scaleQuantize()`
  * `d3.scaleQuantile()`
  * `d3.scaleThreshold()`
* Ordinal - discrete domain to discrete set of elements in a continuous range
  tinuous range
  * `d3.scaleOrdinal()`
  * `d3.scaleBand()`
  * `d3.scalePoint()`

## Methods available on the above

* `clamp(true)` - keep values within the given range
* `invert()` - map values in 'range' to values in the 'domain'
* `nice()` - rounds the endpoints of domain to nice, round values for display purposes

## Axes

Axes functions take a scale; the axes can then be used to draw tick marks.

* `d3.axisTop(scale)` - draw horizontal axis with ticks on top of line
* `d3.axisBottom(scale)` - draw horizontal axis with ticks on bottom of line
* `d3.axisLeft(scale)` - draw vertical axis with ticks on left of line
* `d3.axisRight(scale)` - draw vertical axis with ticks on right of line

Methods available for axes:

* `d3.range([start,]stop[,step])` - define a range with an arithmetic progression
* axis`.tickValues([])` - only display ticks at given points
* axis`.tickFormat(format)` - standard numeric formatters available
* `tickSize(), tickPadding()` and `tickOffset` methods

Methods available for dates:

* [D3 Time API](https://d3js.org/api#d3-time)
* `d3.timeParse(specifier)` - convert strings to date objects (available [Time Formats](https://d3js.org/d3-time-format#locale_format))
* `d3.extend(dates)` - get min/max elements

There are a number of methods available for scales, see the [d3-scale](https://d3js.org/d3-scale) documentation.
