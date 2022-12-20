# BreakZoneShapePoint

Adds a node that breaks a 'ZoneShapePoint' into its member fields

## 图示

![]($-20221218-14460929.png)

## Inputs

Zone Shape Point: Zone Shape Point Structure (by ref).  

## Outputs

Position: Vector. Position:. Position of the point.

Tangent Length: Float (single-precision). Tangent Length:. Length of the Bezier point tangents, or cached half-width of the lane profile..

Inner Turn Radius: Float (single-precision). Inner Turn Radius:. Inner turn radius associated with this point. Used when polygon shape routing is set to 'Arcs'..

Rotation: Rotator. Rotation:. Rotation of the point. Forward direction of the rotation matches the tangents.. For Lane Profile points, the forward directions points into the shape so that we can match the incoming lanes rotation..

Type: FZoneShapePointType Enum. Type:. Type of the control point.

Lane Profile: Byte. Lane Profile:. Index to external array referring to Lane Profile, or FZoneShapePoint::InheritLaneProfile if we should use Shape's lane profile.. This is a little awkward indirection, but keeps the point memory usage in check..

Reverse Lane Profile: Boolean. Reverse Lane Profile:. True of lane profile should be reversed..

Lane Connection Restrictions: Bitmask Integer. Lane Connection Restrictions:. Lane connection restrictions.

