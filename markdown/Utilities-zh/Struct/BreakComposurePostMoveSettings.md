# BreakComposurePostMoveSettings

添加一个节点，将'ComposurePostMoveSettings'分解成其成员字段

## 图示

![]($-20221218-14324812.png)

## Inputs

Composure Post Move Settings。Composure Post Move Settings结构（通过引用）。 

## Outputs

Pivot。矢量2D结构。Pivot:. 用于对图像进行旋转和缩放的归一化支点。x和y值被归一化为0-1的范围，其中1代表图像的全部宽度和高度。

翻译。矢量二维结构。翻译：。应用于图像的平移。x和y值被归一化为0-1的范围，其中1代表图像的全部宽度和高度。

旋转角度。Float（单精度）。旋转角度：。应用于图像的逆时针旋转，单位是度。

规模。Float（单精度）。规模：。应用到图像上的比例。
