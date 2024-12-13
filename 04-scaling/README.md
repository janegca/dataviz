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
  * `d3.scaleSequential(interpolator)`
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
