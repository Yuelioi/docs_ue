# MakeMoviePipelinePostProcessPass

添加一个节点，从其成员中创建一个 "MoviePipelinePostProcessPass"。

## 图示

![]($-20221218-14580475.png)

## Inputs

已启用。布尔型。启用：。额外的传递会增加大量的渲染时间。如果使用屏幕百分比，可能会产生多个输出文件。

材料。材料界面软性物体参考。材料:.材质应设置为后期处理域，可混合的位置=After Tonemapping。这将需要启用bDisableMultisampleEffects来使像素排成一行（即：没有DoF、MotionBlur、TAA）。  

## Outputs

电影管道后处理通道。电影管道后处理通道结构。
