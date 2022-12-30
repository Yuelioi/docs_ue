# GetEstimatedTimeRemaining

Get the estimated amount of time remaining for the current pipeline. Based on looking at the total. amount of samples to render vs. how many have been completed so far. Inaccurate when Time Dilation. is used, and gets more accurate over the course of the render.

Target is Movie Pipeline Blueprint Library

## 图示

![]($-20221218-20085124.png)

## Inputs

In Pipeline: Movie Pipeline Object Reference. The pipeline to get the time estimate from..  

## Outputs

Out Estimate: Timespan Structure. The resulting estimate, or FTimespan() if estimate is not valid..

Return Value: Boolean. True if a valid estimate can be calculated, or false if it is not ready yet (ie: not enough samples rendered).

