# BreakCameraFocusSettings

添加一个节点，将'CameraFocusSettings'分解成其成员字段

## 图示

![]($-20221218-14320710.png)

## Inputs

相机焦点设置。相机聚焦设置结构（通过引用）。 

## Outputs

对焦方法。ECameraFocusMethod Enum。Focus Method:（聚焦方法）。使用哪种方法来处理相机对焦。

手动对焦距离。Float（单精度）。手动对焦距离:。手动控制的对焦距离（仅限手动对焦模式）。

追踪对焦设置。相机跟踪对焦设置结构。追踪对焦设置：。控制跟踪对焦的设置（仅限跟踪对焦模式）。

平滑对焦变化。布尔值。平滑对焦变化：。真，使用插值来平滑对焦距离的变化；假，对焦距离的变化是瞬时的。

Focus Smoothing Interp Speed: 浮点数（单精度）。Focus Smoothing Interp Speed:. 控制平滑焦点距离变化时的插值速度。如果bSmoothFocusChanges为假，则忽略。

焦点偏移。Float（单精度）。焦点偏移：。额外的对焦深度偏移，如果你选择的对焦方法需要调整，用于手动调整。
