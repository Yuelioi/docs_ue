# BreakAbcGeometryCacheSettings

Adds a node that breaks a 'AbcGeometryCacheSettings' into its member fields

## 图示

![]($-20221218-14303291.png)

## Inputs

Abc Geometry Cache Settings: Abc Geometry Cache Settings Structure (by ref).  

## Outputs

Flatten Tracks: Boolean. Flatten Tracks:. Whether or not to merge all vertex animation into one track.

Store Imported Vertex Numbers: Boolean. Store Imported Vertex Numbers:. Store the imported vertex numbers. This lets you know the vertex numbers inside the DCC.. The values of each vertex number will range from 0 to 7 for a cube. Even if the number of positions might be 24..

Apply Constant Topology Optimizations: Boolean. Apply Constant Topology Optimizations:. Force the preprocessor to only do optimization once instead of when the preprocessor decides. This may lead to some problems with certain meshes but makes sure motion. blur always works if the topology is constant..

Motion Vectors: EAbcGeometryCacheMotionVectorsImport Enum. Motion Vectors.

Optimize Index Buffers: Boolean. Optimize Index Buffers:. Optimizes index buffers for each unique frame, to allow better cache coherency on the GPU. Very costly and time-consuming process, recommended to OFF..

Compressed Position Precision: Float (single-precision). Compressed Position Precision:. Precision used for compressing vertex positions (lower = better result but less compression, higher = more lossy compression but smaller size).

Compressed Texture Coordinates Number Of Bits: Integer. Compressed Texture Coordinates Number Of Bits:. Bit-precision used for compressing texture coordinates (hight = better result but less compression, lower = more lossy compression but smaller size).

