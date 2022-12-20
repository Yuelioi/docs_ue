# BreakDetectedFaceFeatureRegion

Adds a node that breaks a 'DetectedFaceFeatureRegion' into its member fields

## 图示

![]($-20221218-14335292.png)

## Inputs

Detected Face Feature Region: Detected Face Feature Region Structure (by ref).  

## Outputs

Feature Type: EDetectedFaceFeatureType Enum. Feature Type:. The type of region that was detected.

Points: Array of Vector 2D Structures. Points:. The set of points that encompass the detected feature area.

Confidence: Float (single-precision). Confidence:. How confident the ML was in determining this feature and its type.

