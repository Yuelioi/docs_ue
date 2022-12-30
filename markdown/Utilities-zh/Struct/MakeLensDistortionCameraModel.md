# MakeLensDistortionCameraModel

添加一个节点，从其成员中创建一个 "LensDistortionCameraModel"。

## 图示

![]($-20221218-14563012.png)

## Inputs

K1：浮点（单精度）。K1:.径向参数#1.

K2:浮点数（单精度）。K2:.径向参数#2.

K3: 浮点数（单精度）。K3:.径向参数#3.

P1：浮点数（单精度）。P1:.切向参数#1.

P2:浮点数（单精度）。P2:.切向参数#2.

F: 矢量二维结构。F:.相机矩阵的Fx和Fy。

C：向量二维结构。C:.相机矩阵的Cx和Cy.

## Outputs

镜头失真相机模型。镜头失真相机模型结构。
