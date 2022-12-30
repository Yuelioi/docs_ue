# LandscapeImportHeightmapfromRend-

Overwrites a landscape heightmap with render target data

Target is Landscape Proxy

## 图示

![]($-20221218-20365013.png)

## Inputs

In: Exec.

Target: Landscape Proxy Object Reference.

In Render Target: Texture Render Target 2D Object Reference. Valid render target with a format of RTF_RGBA16f, RTF_RGBA32f or RTF_RGBA8.

In Import Height from RGChannel: Boolean. Only relevant when using format RTF_RGBA16f or RTF_RGBA32f, and will tell us if we should import the height data from the R channel only of the Render target or from R & G. Note that using RTF_RGBA16f with InImportHeightFromRGChannel == false, could have precision loss Only works in the editor.  

## Outputs

Out: Exec.

Return Value: Boolean.

