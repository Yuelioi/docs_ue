# RegisterNavigationInvoker

Registers given actor as a "navigation enforcer" which means navigation system will. make sure navigation is being generated in specified radius around it.. Note:: you need NavigationSystem's GenerateNavigationOnlyAroundNavigationInvokers to be set to true. to take advantage of this feature

Target is Navigation System V1

## 图示

![]($-20221218-17473756.png)

## Inputs

In: Exec.

Target: Navigation System V1 Object Reference.

Invoker: Actor Object Reference.

Tile Generation Radius: Float (single-precision).

Tile Removal Radius: Float (single-precision).  

## Outputs

Out: Exec.

