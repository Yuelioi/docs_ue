# BindClothtoMasterPoseComponent

If this component has a valid MasterPoseComponent then this function makes cloth items on the slave component. take the transforms of the cloth items on the master component instead of simulating separately.. Note: This will FORCE any cloth actor on the master component to simulate in local space. Also. The meshes used in the components must be identical for the cloth to bind correctly

Target is Skeletal Mesh Component

## 图示

![]($-20221218-18174118.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.  

## Outputs

Out: Exec.

