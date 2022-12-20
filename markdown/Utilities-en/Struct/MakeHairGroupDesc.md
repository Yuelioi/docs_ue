# MakeHairGroupDesc

Adds a node that create a 'HairGroupDesc' from its members

## 图示

![]($-20221218-14550841.png)

## Inputs

Hair Width: Float (single-precision). Hair Width:. Hair width (in centimeters).

Hair Root Scale: Float (single-precision). Hair Root Scale:. Scale the hair width at the root.

Hair Tip Scale: Float (single-precision). Hair Tip Scale:. Scale the hair with at the tip.

Hair Shadow Density: Float (single-precision). Hair Shadow Density:. Override the hair shadow density factor (unit less)..

Hair Raytracing Radius Scale: Float (single-precision). Hair Raytracing Radius Scale:. Scale the hair geometry radius for ray tracing effects (e.g. shadow).

Use Hair Raytracing Geometry: Boolean. Use Hair Raytracing Geometry:. Enable hair strands geomtry for raytracing.

LODBias: Float (single-precision). LODBias:. Bias the selected LOD. A value >0 will progressively select lower detailed lods. Used when r.HairStrands.Cluster.Culling = 1..

Hair Length Scale: Float (single-precision). Hair Length Scale:. When enabled, Length Scale allow to scale the length of the hair..  

## Outputs

Hair Group Desc: Hair Group Desc Structure.

