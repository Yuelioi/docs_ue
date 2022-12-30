# GetPixelMappingComponentModulato-

Returns the Modulators of the component corresponding to the patch specified.. Note, this node does a lookup on all fixture patches in use, hence may be slow and shouldn't be called on tick.

Target is DMXPixel Mapping Renderer Component

## 图示

![]($-20221218-18442786.png)

## Inputs

In: Exec.

Target: DMXPixel Mapping Renderer Component Object Reference.

Fixture Patch Ref: DMX Fixture Patch Ref Structure.  

## Outputs

Out: Exec.

DMXModulators: Array of DMXModulator Object References.

Return Value: Boolean. Returns the Modulators of the component corresponding to the patch specified.. Note, this node does a lookup on all fixture patches in use, hence may be slow and shouldn't be called on tick..

