# BreakDetectedFace

Adds a node that breaks a 'DetectedFace' into its member fields

## 图示

![]($-20221218-14335118.png)

## Inputs

Detected Face: Detected Face Structure (by ref).  

## Outputs

Bounding Box: Box 2D Structure. Bounding Box:. The bounding box of the detected face.

Features: Array of Detected Face Feature 2D Structures. Features:. The set of 2D features that were detected.

Feature Regions: Array of Detected Face Feature Region Structures. Feature Regions:. The set of region features that were detected.

Points: Array of Vector 2D Structures. Points:. The set of points that encompass the detected feature area.

Confidence: Float (single-precision). Confidence:. How confident the ML was in determining this feature and its type.

