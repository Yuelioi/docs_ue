# MakeComposurePostMoveSettings

添加一个节点，从其成员中创建一个 "ComposurePostMoveSettings"。

## 图示

![]($-20221218-14490045.png)

## Inputs

枢轴。矢量二维结构。Pivot：。用于对图像进行旋转和缩放的规范化支点。x和y值被归一化为0-1的范围，其中1代表图像的全部宽度和高度。

翻译。矢量二维结构。翻译：。应用于图像的平移。x和y值被归一化为0-1的范围，其中1代表图像的全部宽度和高度。

旋转角度。Float（单精度）。旋转角度：。应用于图像的逆时针旋转，单位是度。

规模。Float（单精度）。规模：。应用于图像的比例。  

## Outputs

康采恩移动后的设置。Composure Post Move设置结构。
