# MakeLiveLinkCameraStaticData

Adds a node that create a 'LiveLinkCameraStaticData' from its members

## 图示

![]($-20221218-14565284.png)

## Inputs

Is Field Of View Supported: Boolean. Is Field Of View Supported:. Whether FieldOfView in frame data can be used.

Is Aspect Ratio Supported: Boolean. Is Aspect Ratio Supported:. Whether AspectRatio in frame data can be used.

Is Focal Length Supported: Boolean. Is Focal Length Supported:. Whether FocalLength in frame data can be used.

Is Projection Mode Supported: Boolean. Is Projection Mode Supported:. Whether ProjectionMode in frame data can be used.

Film Back Width: Float (single-precision). Film Back Width:. Used with CinematicCamera. Values greater than 0 will be applied.

Film Back Height: Float (single-precision). Film Back Height:. Used with CinematicCamera. Values greater than 0 will be applied.

Is Aperture Supported: Boolean. Is Aperture Supported:. Whether Aperture in frame data can be used.

Is Focus Distance Supported: Boolean. Is Focus Distance Supported:. Whether FocusDistance in frame data can be used.

Is Location Supported: Boolean. Is Location Supported:. Whether location in frame data should be used.

Is Rotation Supported: Boolean. Is Rotation Supported:. Whether rotation in frame data should be used.

Is Scale Supported: Boolean. Is Scale Supported:. Whether scale in frame data should be used.

Property Names: Array of Names. Property Names:. Names for each curve values that will be sent for each frame.  

## Outputs

Live Link Camera Static Data: Live Link Camera Static Data Structure.

