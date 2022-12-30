# MakeStandardFilename

Make fully standard "Unreal" pathname:

  * Normalizes path separators [NormalizeFilename]

  * Removes extraneous separators [NormalizeDirectoryName, as well removing adjacent separators]

  * Collapses internal ..'s

  * Makes relative to Engine\Binaries\<Platform> (will ALWAYS start with ..\\..\\..)





Target is Blueprint Paths Library

## 图示

![]($-20221218-14281148.png)

## Inputs

In Path: String.  

## Outputs

Out Path: String.

