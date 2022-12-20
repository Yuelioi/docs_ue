# MakeMinimalViewInfo

Adds a node that create a 'MinimalViewInfo' from its members

## 图示

![]($-20221218-14574672.png)

## Inputs

Location: Vector. Location:. Location.

Rotation: Rotator. Rotation:. Rotation.

FOV: Float (single-precision). FOV:. The horizontal field of view (in degrees) in perspective mode (ignored in orthographic mode)..

Ortho Width: Float (single-precision). Ortho Width:. The desired width (in world units) of the orthographic view (ignored in Perspective mode).

Ortho Near Clip Plane: Float (single-precision). Ortho Near Clip Plane:. The near plane distance of the orthographic view (in world units).

Ortho Far Clip Plane: Float (single-precision). Ortho Far Clip Plane:. The far plane distance of the orthographic view (in world units).

Aspect Ratio: Float (single-precision). Aspect Ratio:. Aspect Ratio (Width/Height).

Constrain Aspect Ratio: Boolean. Constrain Aspect Ratio:. If bConstrainAspectRatio is true, black bars will be added if the destination view has a different aspect ratio than this camera requested..

Use Field Of View For LOD: Boolean. Use Field Of View for LOD:. If true, account for the field of view angle when computing which level of detail to use for meshes..

Projection Mode: ECameraProjectionMode Enum. Projection Mode:. The type of camera.

Post Process Blend Weight: Float (single-precision). Post Process Blend Weight:. Indicates if PostProcessSettings should be applied..

Post Process Settings: Post Process Settings Structure. Post Process Settings:. Post-process settings to use if PostProcessBlendWeight is non-zero..

Off Center Projection Offset: Vector 2D Structure. Off Center Projection Offset:. Off-axis / off-center projection offset as proportion of screen dimensions.  

## Outputs

Minimal View Info: Minimal View Info Structure.

