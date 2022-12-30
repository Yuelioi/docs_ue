# GetSourceBlocks

获取纹理的源块。如果贴图是空的，那么该纹理将被简单地作为普通纹理使用payload key导入。

目标是互换纹理2DNode

## 图示

![]($-20221218-19340375.png)

## Inputs

目标：互换纹理2DNode对象参考。  

## Outputs

返回值。整数到字符串的映射。获取纹理的源块。如果map为空，那么纹理将被简单地导入到使用payload key的普通纹理中。
