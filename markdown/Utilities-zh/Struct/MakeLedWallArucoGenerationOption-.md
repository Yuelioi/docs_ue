# MakeLedWallArucoGenerationOption-

添加一个节点，从其成员中创建一个 "LedWallArucoGenerationOptions"。

## 图示

![]($-20221218-14562839.png)

## Inputs

纹理宽度：整数。Texture Width（纹理宽度）：。将包含Aruco标记的纹理的宽度。

纹理高度：整数。纹理高度：。将包含Aruco标记的纹理的高度。

Aruco字典。EArucoDictionary Enum.Aruco Dictionary:.生成标记时使用的Aruco字典。

标记Id。整数。标记Id:。开始的标记ID。Arucos将以连续的Marker Ids产生，从这个开始。

地方模数：整数。位置模数：。用来避免快速用完字典中的符号。当[（行+列）mod PlaceModulus]为零时，将放置下一个标记id。

## Outputs

Led Wall Aruco Generation Options:Led Wall Aruco Generation Options结构。
