# AddRuntimeCandidateImagefromRawb-

Create an ARCandidateImage object from the raw pixel data and add it to the ARCandidateImageList of the given \c UARSessionConfig object.

Note that you need to restart the AR session with the \c UARSessionConfig you are adding to to make the change take effect.

On ARCore platform, you can leave the PhysicalWidth and PhysicalHeight to 0 if you don't know the physical size of the image or. the physical size is dynamic. And this function takes time to perform non-trivial image processing (20ms - 30ms),. and should be run on a background thread.

Target is Google ARCore Session Function Library

## 图示

![]($-20221218-17573478.png)

## Inputs

In: Exec.

Session Config: ARSession Config Object Reference.

Image Grayscale Pixels: Array of Bytes.

Image Width: Integer.

Image Height: Integer.

Friendly Name: String.

Physical Width: Float (single-precision).

Candidate Texture: Texture 2D Object Reference.  

## Outputs

Out: Exec.

Return Value: ARCandidate Image Object Reference. A \c UARCandidateImage Object pointer if the underlying ARPlatform added the candidate image at runtime successfully. Return nullptr otherwise..

