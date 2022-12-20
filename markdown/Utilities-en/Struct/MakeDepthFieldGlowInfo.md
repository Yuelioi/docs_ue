# MakeDepthFieldGlowInfo

Adds a node that create a 'DepthFieldGlowInfo' from its members

## 图示

![]($-20221218-14501796.png)

## Inputs

Enable Glow: Boolean. Enable Glow:. Whether to turn on the outline glow (depth field fonts only).

Glow Color: Linear Color Structure. Glow Color:. Base color to use for the glow.

Glow Outer Radius: Vector 2D Structure. Glow Outer Radius:. If bEnableGlow, outline glow outer radius (0 to 1, 0.5 is edge of character silhouette). glow influence will be 0 at GlowOuterRadius.X and 1 at GlowOuterRadius.Y.

Glow Inner Radius: Vector 2D Structure. Glow Inner Radius:. If bEnableGlow, outline glow inner radius (0 to 1, 0.5 is edge of character silhouette). glow influence will be 1 at GlowInnerRadius.X and 0 at GlowInnerRadius.Y.  

## Outputs

Depth Field Glow Info: Depth Field Glow Info Structure.

