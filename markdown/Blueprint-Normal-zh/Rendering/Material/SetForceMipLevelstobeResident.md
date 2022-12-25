# SetForceMipLevelstobeResident

强制流媒体系统在指定的时间内不考虑正常的逻辑，而总是为这个材质使用的所有纹理加载所有的mip级别。

目标是材料界面

## 图示

![]($-20221218-20381636.png)

## Inputs

在。执行。

目标。材料界面对象参考。

覆盖 迫使Miplevels成为居民。布尔值。是使用（真）还是忽略（假）bForceMiplevelsToBeResidentValue参数。

迫使Miplevels成为常驻值。Boolean. true 强制所有的mips流进来。 false 让其他因素决定如何处理mips。

力的持续时间。浮点数（单精度）。在内存中保留所有mip级的秒数，不考虑正常的优先级逻辑。负值将其关闭。

电影纹理组。Integer（整数）。表示应使用额外高分辨率mips的纹理组的位域。

快速反应。布尔型。使用时要特别小心!快速响应纹理会产生可观的GT开销并干扰流媒体指标的计算。尽可能地避免。  

## Outputs

出：执行。
