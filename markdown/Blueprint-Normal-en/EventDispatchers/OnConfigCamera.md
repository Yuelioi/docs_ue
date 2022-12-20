# OnConfigCamera

On Config Camera:. A dynamic delegate can be assigned through blueprint. Will be called before ARSession started and returns. an array of supported ARCore camera config.

The array will always return 3 camera configs. The GPU texture resolutions. are the same in all three configs. Currently, most devices provide GPU. texture resolution of 1920 x 1080, but devices might provide higher or lower. resolution textures, depending on device capabilities. The CPU image. resolutions returned are VGA, 720p, and a resolution matching the GPU. texture.

Bind this delegate if you want to choose a specific camera config in your app. Call. UGoogleARCoreSessionFunctionLibrary::ConfigARCoreCamera after the delegate is triggered.

