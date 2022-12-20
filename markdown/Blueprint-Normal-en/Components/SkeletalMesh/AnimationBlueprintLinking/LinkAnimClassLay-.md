# LinkAnimClassLay-

Runs through all layer nodes, attempting to find layer nodes that are implemented by the specified class, then sets up a linked instance of the class for each.. Allocates one linked instance to run each of the groups specified in the class, so state is shared. If a layer is not grouped (ie. NAME_None), then state is not shared. and a separate linked instance is allocated for each layer node.. If InClass is null, then all layers are reset to their defaults.

Target is Skeletal Mesh Component

## 图示

![]($-20221218-18255902.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.

In Class: Anim Instance Class Reference.  

## Outputs

Out: Exec.

