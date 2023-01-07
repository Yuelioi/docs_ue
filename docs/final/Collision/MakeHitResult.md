# MakeHitResult

Create a HitResult struct

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-18192050.png)

## Inputs

Blocking Hit: Boolean. True if there was a blocking hit, false otherwise..

Initial Overlap: Boolean. True if the hit started in an initial overlap. In this case some other values should be interpreted differently. Time will be 0, ImpactPoint will equal Location, and normals will be equal and indicate a depenetration vector..

Time: Float (single-precision). 'Time' of impact along trace direction ranging from [0.0 to 1.0) if there is a hit, indicating time between start and end. Equals 1.0 if there is no hit..

Distance: Float (single-precision). The distance from the TraceStart to the Location in world space. This value is 0 if there was an initial overlap (trace started inside another colliding object)..

Location: Vector. Location of the hit in world space. If this was a swept shape test, this is the location where we can place the shape in the world where it will not penetrate..

Impact Point: Vector. Location of the actual contact point of the trace shape with the surface of the hit object. Equal to Location in the case of an initial overlap..

Normal: Vector. Normal of the hit in world space, for the object that was swept (e.g. for a sphere trace this points towards the sphere's center). Equal to ImpactNormal for line tests..

Impact Normal: Vector. Normal of the hit in world space, for the object that was hit by the sweep..

Phys Mat: Physical Material Object Reference. Physical material that was hit. Must set bReturnPhysicalMaterial to true in the query params for this to be returned..

Hit Actor: Actor Object Reference. Actor hit by the trace..

Hit Component: Primitive Component Object Reference. PrimitiveComponent hit by the trace..

Hit Bone Name: Name. Name of the bone hit (valid only if we hit a skeletal mesh)..

Bone Name: Name. Name of the trace bone hit (valid only if we hit a skeletal mesh)..

Hit Item: Integer. Primitive-specific data recording which item in the primitive was hit.

Element Index: Integer. If colliding with a primitive with multiple parts, index of the part that was hit..

Face Index: Integer. If colliding with trimesh or landscape, index of face that was hit..

Trace Start: Vector.

Trace End: Vector.

## Outputs

Return Value: Hit Result Structure.

<hr>

Create a HitResult struct

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-18192050.png)

## Inputs

Blocking Hit: Boolean. True if there was a blocking hit, false otherwise..

Initial Overlap: Boolean. True if the hit started in an initial overlap. In this case some other values should be interpreted differently. Time will be 0, ImpactPoint will equal Location, and normals will be equal and indicate a depenetration vector..

Time: Float (single-precision). 'Time' of impact along trace direction ranging from [0.0 to 1.0) if there is a hit, indicating time between start and end. Equals 1.0 if there is no hit..

Distance: Float (single-precision). The distance from the TraceStart to the Location in world space. This value is 0 if there was an initial overlap (trace started inside another colliding object)..

Location: Vector. Location of the hit in world space. If this was a swept shape test, this is the location where we can place the shape in the world where it will not penetrate..

Impact Point: Vector. Location of the actual contact point of the trace shape with the surface of the hit object. Equal to Location in the case of an initial overlap..

Normal: Vector. Normal of the hit in world space, for the object that was swept (e.g. for a sphere trace this points towards the sphere's center). Equal to ImpactNormal for line tests..

Impact Normal: Vector. Normal of the hit in world space, for the object that was hit by the sweep..

Phys Mat: Physical Material Object Reference. Physical material that was hit. Must set bReturnPhysicalMaterial to true in the query params for this to be returned..

Hit Actor: Actor Object Reference. Actor hit by the trace..

Hit Component: Primitive Component Object Reference. PrimitiveComponent hit by the trace..

Hit Bone Name: Name. Name of the bone hit (valid only if we hit a skeletal mesh)..

Bone Name: Name. Name of the trace bone hit (valid only if we hit a skeletal mesh)..

Hit Item: Integer. Primitive-specific data recording which item in the primitive was hit.

Element Index: Integer. If colliding with a primitive with multiple parts, index of the part that was hit..

Face Index: Integer. If colliding with trimesh or landscape, index of face that was hit..

Trace Start: Vector.

Trace End: Vector.

## Outputs

Return Value: Hit Result Structure.
