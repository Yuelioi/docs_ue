# MakeCameraFocusSettings

Adds a node that create a 'CameraFocusSettings' from its members

## 图示

![]($-20221218-14480903.png)

## Inputs

Focus Method: ECameraFocusMethod Enum. Focus Method:. Which method to use to handle camera focus.

Manual Focus Distance: Float (single-precision). Manual Focus Distance:. Manually-controlled focus distance (manual focus mode only).

Tracking Focus Settings: Camera Tracking Focus Settings Structure. Tracking Focus Settings:. Settings to control tracking focus (tracking focus mode only).

Smooth Focus Changes: Boolean. Smooth Focus Changes:. True to use interpolation to smooth out changes in focus distance, false for focus distance changes to be instantaneous..

Focus Smoothing Interp Speed: Float (single-precision). Focus Smoothing Interp Speed:. Controls interpolation speed when smoothing focus distance changes. Ignored if bSmoothFocusChanges is false..

Focus Offset: Float (single-precision). Focus Offset:. Additional focus depth offset, used for manually tweaking if your chosen focus method needs adjustment.  

## Outputs

Camera Focus Settings: Camera Focus Settings Structure.

