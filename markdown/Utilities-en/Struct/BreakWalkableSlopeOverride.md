# BreakWalkableSlopeOverride

Adds a node that breaks a 'WalkableSlopeOverride' into its member fields

## 图示

![]($-20221218-14453654.png)

## Inputs

Walkable Slope Override: Walkable Slope Override Structure (by ref).  

## Outputs

Walkable Slope Behavior: EWalkableSlopeBehavior Enum. Walkable Slope Behavior:. Behavior of this surface (whether we affect the walkable slope).. @see GetWalkableSlopeBehavior(), SetWalkableSlopeBehavior().

Walkable Slope Angle: Float (single-precision). Walkable Slope Angle:. Override walkable slope angle (in degrees), applying the rules of the Walkable Slope Behavior.. @see GetWalkableSlopeAngle(), SetWalkableSlopeAngle().

