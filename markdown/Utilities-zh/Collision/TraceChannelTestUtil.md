# TraceChannelTestUtil

Helper function to trace and permute many options at once

Target is Functional Test Utility Library

## 图示

![]($-20221218-13351403.png)

## Inputs

In: Exec.

Batch Options: Trace Channel Test Batch Options Structure (by ref).

Start: Vector.

End: Vector.

Sphere Capsule Radius: Float (single-precision).

Capsule Half Height: Float (single-precision).

Box Half Size: Vector.

Orientation: Rotator.

Trace Channel: ETraceTypeQuery Enum.

Object Types: Array of EObjectTypeQuery Enums.

Profile Name: Name.

Trace Complex: Boolean.

Actors to Ignore: Array of Actor Object References.

Ignore Self: Boolean.

Draw Debug Type: EDrawDebugTrace Enum.

Trace Color: Linear Color Structure.

Trace Hit Color: Linear Color Structure.

Draw Time: Float (single-precision).  

## Outputs

Out: Exec.

Return Value: Trace Query Test Results Object Reference. Helper function to trace and permute many options at once.
