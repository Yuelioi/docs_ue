# Conversions

在这一页

  * 行动





## Actions

从X向量旋转。返回与矢量所指向的方向相对应的FRotator方向。将Yaw和Pitch设置为适当的数字，并将Roll设置为零，因为Roll不能从矢量中确定。目标是Kismet数学库。

转为布尔型（整数）。将一个int转换为一个bool。目标是Kismet数学库。

转换为字节（布尔型）。将一个布尔值转换为一个字节。目标是Kismet数学库。

至字节（整数）。将一个整数转换为一个字节（如果整数太大，返回低8位）。目标是Kismet数学库。

至字节（Integer64）。将一个64位的整数转换为一个字节（如果整数太大，返回低8位）。目标是Kismet数学库。

到颜色（LinearColor）。对线性颜色进行量化，并将结果作为FColor返回，可选择sRGB转换和质量作为目标。目标是Kismet数学库。

转为双数（字节）。将一个字节转换为一个双数。目标是Kismet数学库。

转为双数（浮点数）。将32位浮点转换为64位浮点。目标是Kismet数学库。

转为双数（整数）。将一个整数转换为一个双数。目标是Kismet数学库。

转为双数(Integer64)。将64位整数转换为64位浮点。目标是Kismet数学库。

转为浮点数（布尔型）。将布尔值转换为浮点数（0.0f或1.0f）。目标是Kismet数学库。

转为浮点数（字节）。将一个字节转换为一个浮点数。目标是Kismet数学库。

到浮点（双倍）。将64位浮点转换为32位浮点（如果浮点太大，返回低32位）。目标是Kismet数学库。

转为Float（整数）。将一个整数转换为浮点数。目标是Kismet数学库。

转为整数（布尔型）。将一个布尔值转换为一个int：目标是Kismet数学库。

转为整数（字节）。将一个字节转换为一个整数。目标是Kismet数学库。

到整数（Integer64）。将64位整数转换为32位整数（如果整数太大，则返回低32位）。目标是Kismet数学库。

转换为Integer64 (Byte)。将一个字节转换为一个整数。目标是Kismet数学库。

转为Integer64 (Double)。将64位浮点转换为64位整数。目标是Kismet数学库。

到Integer64（整数）。将一个整数转换为一个64位的整数。目标是Kismet数学库。

到IntPoint（Vector2D）。将一个Vector2D转换成一个IntPoint。目标是Kismet数学库。

到IntVector (Integer)。将一个整数转换为一个IntVector。目标是Kismet数学库。

到LinearColor(颜色)。将一种颜色转换为LinearColor：目标是Kismet数学库。

到LinearColor (Double)。将一个浮点数转换成LinearColor，其中每个元素是一个双数。目标是Kismet数学库。

到LinearColor (Float)。将一个浮点数转换成LinearColor，其中每个元素都是一个浮点数。目标是Kismet数学库。

到线性颜色（矢量）。将一个矢量转换为线性颜色：目标是Kismet数学库。

对四元数（矢量）。返回对应于矢量指向的方向的四元数方向。类似于FRotator的版本，返回一个没有滚动的结果，这样它就保留了向上的矢量。注意：如果你不关心保留向上的矢量，只想得到最直接的旋转，你可以使用更快的。FQuat::FindBetweenVectors(FVector::ForwardVector, YourVector)'或者'FQuat::FindBetweenNormals(...)'如果你知道向量是单位长度的话。目标是Kismet数学库。

对四元数(Vector4)。返回对应于矢量指向的方向的四元数方向。类似于FRotator的版本，返回一个没有滚动的结果，这样它就保留了向上的矢量。注意：如果你不关心保留向上的矢量，只想得到最直接的旋转，你可以使用更快的。FQuat::FindBetweenVectors(FVector::ForwardVector, YourVector)'或者'FQuat::FindBetweenNormals(...)'如果你知道向量是单位长度的话。目标是Kismet数学库。

对旋转（Vector4）。返回对应于矢量指向的方向的FRotator方向。将Yaw和Pitch设置为适当的数字，并将Roll设置为零，因为Roll不能从矢量中确定。目标是Kismet数学库。

转为旋转器（矩阵）。将一个矩阵转换为一个旋转器。(假设Matrix代表一个变换）。目标是Kismet数学库。

转化（矩阵）。将一个矩阵转换为一个变换。(假设矩阵代表一个变换）。目标是Kismet数学库。

转化（旋转器）。将旋转器转换为变换。目标是Kismet数学库。

转化（矢量）。将一个向量转换为一个变换。使用向量作为位置。目标是Kismet数学库。

转为向量（双倍）。将一个双数转换成一个矢量，其中每个元素都是该双数。目标是Kismet数学库。

转为矢量（浮点数）。将一个浮点数转换成一个矢量，其中每个元素都是该浮点数。目标是Kismet数学库。

向量（整数）。将一个整数转换为一个FVector。目标是Kismet数学库。

向量（IntVector）。将一个IntVector转换为一个矢量。目标是Kismet数学库。

转为矢量（LinearColor）。将LinearColor转换为一个矢量。目标是Kismet数学库。

到矢量（Vector2D）。将一个Vector2D转换为一个Vector。目标是Kismet数学库。

到Vector(Vector4)。将一个Vector4转换为一个Vector（去掉W元素）。目标是Kismet数学库。

到Vector2D(IntPoint)。将一个IntPoint转换为Vector2D：目标是Kismet数学库。

到Vector2D (Vector)。使用Vector的（X，Y）坐标将一个Vector转换为Vector2D。目标是Kismet数学库。

ToQuaternion (Rotator).转换为该旋转器的四元数表示。目标是Kismet数学库。

ToRotator (Quat).转换为该四元数的旋转器表示。目标是Kismet数学库。
