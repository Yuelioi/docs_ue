# BreakDetectedFaceFeature2D

Adds a node that breaks a 'DetectedFaceFeature2D' into its member fields

## 图示

![]($-20221218-14335206.png)

## Inputs

Detected Face Feature 2D: Detected Face Feature 2D Structure (by ref).  

## Outputs

Feature Type: EDetectedFaceFeatureType Enum. Feature Type:. The type of region that was detected.

Bounding Box: Box 2D Structure. Bounding Box:. The bounding box of the detected feature in the image.

Confidence: Float (single-precision). Confidence:. How confident the ML was in determining this feature and its type.

