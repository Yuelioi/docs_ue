# BreakImageWriteOptions

Adds a node that breaks a 'ImageWriteOptions' into its member fields

## 图示

![]($-20221218-14381068.png)

## Inputs

Image Write Options: Image Write Options Structure (by ref).  

## Outputs

Format: EDesiredImageFormat Enum. Format:. The desired output image format to write to disk.

On Complete: Delegate. On Complete:. A callback to invoke when the image has been written, or there was an error.

Compression Quality: Integer. Compression Quality:. An image format specific compression setting. Either 0 (Default) or 1 (Uncompressed) for EXRs, or a value between 0 and 100..

Overwrite File: Boolean. Overwrite File:. Whether to overwrite the image if it already exists.

Async: Boolean. Async:. Whether to perform the writing asynchronously, or to block the game thread until it is complete.

