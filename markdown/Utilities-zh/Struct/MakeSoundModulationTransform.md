# MakeSoundModulationTransform

添加一个节点，从其成员中创建一个'SoundModulationTransform'。

## 图示

![]($-20221218-15015239.png)

## Inputs

曲线类型。ESoundModulatorCurve Enum.曲线：。在转换输出时要应用的曲线。

指数标量。Float (single-precision).标量:.当曲线设置为对数、指数或指数逆时，其值为以下公式中的因子'b'，输出为'y'，输入为'x'：。指数：y = x 10^-b(1-x)。指数（反）：y = ((x - 1) 10^(-bx))+ 1.对数：y = b * log(x) + 1。

资产：曲线浮点对象参考。Curve Shared:.如果输出曲线类型被设置为 "共享"，则应用资产曲线参考。  

## Outputs

声音调制变换。声音调制变换的结构。
