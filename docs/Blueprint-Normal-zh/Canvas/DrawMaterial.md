# DrawMaterial

在Canvas上绘制一个材料。

目标是画布

## 图示

![]($-20221218-18144151.png)

## Inputs

在。执行。

目标。Canvas 对象参考。

渲染材料。材料界面对象参考。渲染时使用的材料。记住，只有发射通道可以被渲染，因为在渲染到Canvas时不会进行照明。

Screen Position（屏幕位置）。矢量2D结构。渲染纹理的屏幕空间位置。

Screen Size（屏幕尺寸）。Vector 2D Structure（向量2D结构）。渲染纹理的屏幕空间大小。

Coordinate Position（坐标位置）。Vector 2D Structure（矢量二维结构）。渲染纹理时使用的标准化的UV起始坐标。

Coordinate Size（坐标尺寸）：向量2D结构。Vector 2D Structure（矢量二维结构）。渲染纹理时使用的归一化的UV尺寸坐标。

Rotation（旋转）。Float（单精度）。渲染纹理时的旋转度数。

Pivot Point（支点）：向量2D结构。矢量2D结构。旋转纹理时使用的规范化支点。 

## Outputs

Out（输出）。Exec.
