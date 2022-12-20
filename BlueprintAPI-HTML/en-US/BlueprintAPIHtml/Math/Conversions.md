# Conversions

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

