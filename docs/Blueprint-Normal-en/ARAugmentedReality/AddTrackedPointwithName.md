# AddTrackedPointwithName

Manually add a tracked point with name and world transform.. @WorldTransform: transform in the world space where the point should be created.. @PointName: the name of the created point, must be non-empty.. @bDeletePointsWithSameName: if existing points with the same name should be deleted.

Target is ARBlueprint Library

## 图示

![]($-20221218-17560121.png)

## Inputs

In: Exec.

World Transform: Transform (by ref).

Point Name: String.

Delete Points with Same Name: Boolean.  

## Outputs

Out: Exec.

Return Value: Boolean. if the operation succeeds. Note that this is an async operation - the added point won't be available until a few frames later..

