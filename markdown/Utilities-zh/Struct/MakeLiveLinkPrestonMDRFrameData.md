# MakeLiveLinkPrestonMDRFrameData

Adds a node that create a 'LiveLinkPrestonMDRFrameData' from its members

## 图示

![]($-20221218-14570151.png)

## Inputs

Field Of View: Float (single-precision). Field Of View:. Field of View of the camera in degrees.

Aspect Ratio: Float (single-precision). Aspect Ratio:. Aspect Ratio of the camera (Width / Heigth).

Focal Length: Float (single-precision). Focal Length:. Focal length of the camera.

Aperture: Float (single-precision). Aperture:. Aperture of the camera in terms of f-stop.

Focus Distance: Float (single-precision). Focus Distance:. Focus distance of the camera in cm. Works only in manual focus method.

Projection Mode: ELiveLinkCameraProjectionMode Enum. Projection Mode:. ProjectionMode of the camera (Perspective, Orthographic, etc...).

Transform: Transform. Transform:. Transform of the frame.

Meta Data: Live Link Meta Data Structure. Meta Data:. Frame's metadata..

Property Values: Array of Float (single-precision)s. Property Values:. Values of the properties defined in the static structure. Use FLiveLinkBaseStaticData.FindPropertyValue to evaluate..  

## Outputs

Live Link Preston MDRFrame Data: Live Link Preston MDRFrame Data Structure.

