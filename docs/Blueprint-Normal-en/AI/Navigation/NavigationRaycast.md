# NavigationRaycast

Performs navigation raycast on NavigationData appropriate for given Querier.

Target is Navigation System V1

## 图示

![]($-20221218-17473413.png)

## Inputs

In: Exec.

Ray Start: Vector (by ref).

Ray End: Vector (by ref).

Filter Class: Navigation Query Filter Class Reference.

Querier: Controller Object Reference. if not passed default navigation data will be used.  

## Outputs

Out: Exec.

Hit Location: Vector. if line was obstructed this will be set to hit location. Otherwise it contains SegmentEnd.

Return Value: Boolean. true if line from RayStart to RayEnd was obstructed. Also, true when no navigation data present.

