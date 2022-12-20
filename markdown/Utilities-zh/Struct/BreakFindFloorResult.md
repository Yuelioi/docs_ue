# BreakFindFloorResult

Adds a node that breaks a 'FindFloorResult' into its member fields

## 图示

![]($-20221218-14360332.png)

## Inputs

Find Floor Result: Find Floor Result Structure (by ref).  

## Outputs

Blocking Hit: Boolean. Blocking Hit:. True if there was a blocking hit in the floor test that was NOT in initial penetration.. The HitResult can give more info about other circumstances..

Walkable Floor: Boolean. Walkable Floor:. True if the hit found a valid walkable floor..

Line Trace: Boolean. Line Trace:. True if the hit found a valid walkable floor using a line trace (rather than a sweep test, which happens when the sweep test fails to yield a walkable surface)..

Floor Dist: Float (single-precision). Floor Dist:. The distance to the floor, computed from the swept capsule trace..

Line Dist: Float (single-precision). Line Dist:. The distance to the floor, computed from the trace. Only valid if bLineTrace is true..

Hit Result: Hit Result Structure. Hit Result:. Hit result of the test that found a floor. Includes more specific data about the point of impact and surface normal at that point..

