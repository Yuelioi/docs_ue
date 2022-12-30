# ExportScene

Call this to start an export scene process, the caller must specify a source data. This import process can import many different asset and there transform (USceneComponent) and store the result in a blueprint and add the blueprint to the level.

Target is Interchange Manager

## 图示

![]($-20221218-19310886.png)

## Inputs

In: Exec.

Target: Interchange Manager Object Reference.

World: Object Reference.

Is Automated: Boolean. If true the import asset will not show any UI or dialog.  

## Outputs

Out: Exec.

Return Value: Boolean. true if the import succeed, false otherwise..

