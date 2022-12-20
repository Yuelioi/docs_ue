# GenerateSceneVie-

Returns a functor to activate a scene view extension when the FViewport in the SceneViewExtensionContext is selectively:

  * PIE

  * SIE

  * Editor's active

  * Game's primary. If it is none of the above, it emits no opinion about activating the Scene View Extension.





Target is VPRendering Blueprint Library

## 图示

![]($-20221218-21312089.png)

## Inputs

PIE: Boolean.

SIE: Boolean.

Editor Active: Boolean.

Game Primary: Boolean.  

## Outputs

Out Is Active Function: Scene View Extension Is Active Functor Structure.

