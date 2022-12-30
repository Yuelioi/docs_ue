# Deproject

Performs a deprojection of a screen space coordinate using the projection matrix set up for the Canvas.

Target is Canvas

## 图示

![]($-20221218-18143611.png)

## Inputs

In: Exec.

Target: Canvas Object Reference.

Screen Position: Vector 2D Structure. Screen space position to deproject to the World..  

## Outputs

Out: Exec.

World Origin: Vector. Vector which is the world position of the screen space position..

World Direction: Vector. Vector which can be used in a trace to determine what is "behind" the screen space position. Useful for object picking..

