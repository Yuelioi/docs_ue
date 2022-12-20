# CreateProxyMeshActor

Build a proxy mesh actor that can replace a set of mesh actors.

Target is Static Mesh Editor Subsystem

## 图示

![]($-20221218-18484672.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Actors to Merge: Array of Static Mesh Actor Object References. List of actors to build a proxy for..

Merge Options: Create Proxy Mesh Actor Options Structure (by ref).  

## Outputs

Out: Exec.

Out Merged Actor: Static Mesh Actor Object Reference. generated actor if requested.

Return Value: Boolean. Success of the proxy creation.

