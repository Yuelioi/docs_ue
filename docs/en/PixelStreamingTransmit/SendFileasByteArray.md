# SendFileasByteArray

Send a specified byte array over the WebRTC peer connection data channel. The extension and mime type are used for file reconstruction on the front end

Target is Pixel Streaming Blueprints

## 图示

![]($-20221218-20293160.png)

## Inputs

In: Exec.

Byte Array: Array of Bytes. The raw data that will be sent over the data channel.

Mime Type: String. The mime type of the file. Used for reconstruction on the front end.

File Extension: String. The file extension. Used for file reconstruction on the front end.  

## Outputs

Out: Exec.

