# MakeTextureSourceColorSettings

添加一个节点，从其成员中创建一个 "TextureSourceColorSettings"。

## 图示

![]($-20221218-15031823.png)

## Inputs

编码重写。ETextureSourceEncoding Enum.编码重写：。纹理的源编码，除了sRGB之外还有更多选择。

颜色空间。ETextureColorSpace Enum.颜色空间：。纹理的源颜色空间。

红色色度坐标。矢量2D结构。Red Chromaticity Coordinate: 红色色度坐标。源色彩空间的红色色度坐标。

绿色色度坐标。矢量2D结构。绿色色度坐标：。源色彩空间的绿色色度坐标。

蓝色色度坐标。矢量2D结构。Blue Chromaticity Coordinate：.源色空间的蓝色色度坐标。

白色色度坐标。矢量2D结构。白色色度坐标：。源色彩空间的白色色度坐标。

色度适应方法。ETextureChromaticAdaptationMethod Enum.色度适应方法：。如果源白点与工作色彩空间的白点不同，则采用色度适应方法。

## Outputs

纹理源颜色设置。纹理源颜色设置结构。
