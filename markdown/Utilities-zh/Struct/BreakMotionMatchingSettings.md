# BreakMotionMatchingSettings

Adds a node that breaks a 'MotionMatchingSettings' into its member fields

## 图示

![]($-20221218-14401051.png)

## Inputs

Motion Matching Settings: Motion Matching Settings Structure (by ref).  

## Outputs

Blend Time: Float (single-precision). Blend Time:. Time in seconds to blend out to the new pose. Uses inertial blending and requires an Inertialization node after this node..

Pose Jump Threshold Time: Float (single-precision). Pose Jump Threshold Time:. Don't jump to poses that are less than this many seconds away.

Search Throttle Time: Float (single-precision). Search Throttle Time:. Minimum amount of time to wait between pose search queries.

Min Percent Improvement: Float (single-precision). Min Percent Improvement:. How much better the search result must be compared to the current pose in order to jump to it. Note: This feature won't work quite as advertised until search data rescaling is implemented.

Sequence End Exlusion Time: Float (single-precision). Sequence End Exlusion Time:. Pose indices SequenceEndExclusionTime or less away from the end of the database sequence will be ignored by the: This ensures the search doesn't get stuck at the end of a sequence..

