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

On this page 

  * Actions





## Actions

Rotation From X Vector. Return the FRotator orientation corresponding to the direction in which the vector points.. Sets Yaw and Pitch to the proper numbers, and sets Roll to zero because the roll can't be determined from a vector.: Target is Kismet Math Library.

To Boolean (Integer). Converts a int to a bool: Target is Kismet Math Library.

To Byte (Boolean). Converts a bool to a byte: Target is Kismet Math Library.

To Byte (Integer). Converts an integer to a byte (if the integer is too large, returns the low 8 bits): Target is Kismet Math Library.

To Byte (Integer64). Converts a 64 bit integer to a byte (if the integer is too large, returns the low 8 bits): Target is Kismet Math Library.

To Color (LinearColor). Quantizes the linear color and returns the result as a FColor with optional sRGB conversion and quality as goal.: Target is Kismet Math Library.

To Double (Byte). Converts a byte to a double: Target is Kismet Math Library.

To Double (Float). Converts a 32 bit floating point to a 64 bit floating point: Target is Kismet Math Library.

To Double (Integer). Converts an integer to a double: Target is Kismet Math Library.

To Double (Integer64). Converts a 64 bit integer to a 64 bit floating point: Target is Kismet Math Library.

To Float (Boolean). Converts a bool to a float (0.0f or 1.0f): Target is Kismet Math Library.

To Float (Byte). Converts a byte to a float: Target is Kismet Math Library.

To Float (Double). Converts a 64 bit floating point to a 32 bit floating point (if the float is too large, returns the low 32 bits): Target is Kismet Math Library.

To Float (Integer). Converts an integer to a float: Target is Kismet Math Library.

To Integer (Boolean). Converts a bool to an int: Target is Kismet Math Library.

To Integer (Byte). Converts a byte to an integer: Target is Kismet Math Library.

To Integer (Integer64). Converts a 64 bit integer to a 32 bit integer (if the integer is too large, returns the low 32 bits): Target is Kismet Math Library.

To Integer64 (Byte). Converts a byte to an integer: Target is Kismet Math Library.

To Integer64 (Double). Converts a 64 bit floating point to a 64 bit integer: Target is Kismet Math Library.

To Integer64 (Integer). Converts an integer to a 64 bit integer: Target is Kismet Math Library.

To IntPoint (Vector2D). Convert a Vector2D to an IntPoint: Target is Kismet Math Library.

To IntVector (Integer). Converts an integer to an IntVector: Target is Kismet Math Library.

To LinearColor (Color). Converts a color to LinearColor: Target is Kismet Math Library.

To LinearColor (Double). Convert a float into a LinearColor, where each element is a double: Target is Kismet Math Library.

To LinearColor (Float). Convert a float into a LinearColor, where each element is a float: Target is Kismet Math Library.

To LinearColor (Vector). Converts a vector to LinearColor: Target is Kismet Math Library.

To Quaternion (Vector). Return the Quaternion orientation corresponding to the direction in which the vector points.. Similar to the FRotator version, returns a result without roll such that it preserves the up vector.: Note: If you don't care about preserving the up vector and just want the most direct rotation, you can use the faster. 'FQuat::FindBetweenVectors(FVector::ForwardVector, YourVector)' or 'FQuat::FindBetweenNormals(...)' if you know the vector is of unit length.: Target is Kismet Math Library.

To Quaternion (Vector4). Return the Quaternion orientation corresponding to the direction in which the vector points.. Similar to the FRotator version, returns a result without roll such that it preserves the up vector.: Note: If you don't care about preserving the up vector and just want the most direct rotation, you can use the faster. 'FQuat::FindBetweenVectors(FVector::ForwardVector, YourVector)' or 'FQuat::FindBetweenNormals(...)' if you know the vector is of unit length.: Target is Kismet Math Library.

To Rotation (Vector4). Return the FRotator orientation corresponding to the direction in which the vector points.. Sets Yaw and Pitch to the proper numbers, and sets Roll to zero because the roll can't be determined from a vector.: Target is Kismet Math Library.

To Rotator (Matrix). Convert a Matrix to a Rotator. (Assumes Matrix represents a transform): Target is Kismet Math Library.

To Transform (Matrix). Convert a Matrix to a Transform. (Assumes Matrix represents a transform): Target is Kismet Math Library.

To Transform (Rotator). Convert Rotator to Transform: Target is Kismet Math Library.

To Transform (Vector). Convert a vector to a transform. Uses vector as location: Target is Kismet Math Library.

To Vector (Double). Convert a double into a vector, where each element is that double: Target is Kismet Math Library.

To Vector (Float). Convert a float into a vector, where each element is that float: Target is Kismet Math Library.

To Vector (Integer). Converts an integer to a FVector: Target is Kismet Math Library.

To Vector (IntVector). Convert an IntVector to a vector: Target is Kismet Math Library.

To Vector (LinearColor). Converts a LinearColor to a vector: Target is Kismet Math Library.

To Vector (Vector2D). Convert a Vector2D to a Vector: Target is Kismet Math Library.

To Vector (Vector4). Convert a Vector4 to a Vector (dropping the W element): Target is Kismet Math Library.

To Vector2D (IntPoint). Convert an IntPoint to a Vector2D: Target is Kismet Math Library.

To Vector2D (Vector). Convert a Vector to a Vector2D using the Vector's (X, Y) coordinates: Target is Kismet Math Library.

ToQuaternion (Rotator). Convert to Quaternion representation of this Rotator.: Target is Kismet Math Library.

ToRotator (Quat). Convert to Rotator representation of this Quaternion.: Target is Kismet Math Library.

