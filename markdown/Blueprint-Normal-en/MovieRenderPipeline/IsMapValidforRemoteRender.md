# IsMapValidforRemoteRender

Checks to see if any of the Jobs try to point to maps that wouldn't be valid on a remote render (ie: unsaved maps)

Target is Movie Pipeline Editor Blueprint Library

## 图示

![]($-20221218-20092285.png)

## Inputs

In Jobs: Array of Movie Pipeline Executor Job Object References.  

## Outputs

Return Value: Boolean. Checks to see if any of the Jobs try to point to maps that wouldn't be valid on a remote render (ie: unsaved maps).

