# GetOSCMessageAddressAtIndex

如果在范围内且OSC类型与'String'相匹配，则将值设置为OSCMessage中提供的索引地址（不返回消息的地址，而是将字符串打包在消息中并转换为OSC地址）。如果在索引处发现字符串，并且是有效的OSC地址路径，则返回。

目标是OSCManager

## 图示

![]($-20221218-18054201.png)

## Inputs

在。执行。

消息。OSCMessage结构（通过引用）。

索引。整数。 

## Outputs

输出。Exec.

值。OSCAddress结构。

Succeeded（成功）。布尔值。如果在范围内且OSC类型与 "字符串 "相匹配，则将值设置为OSCMessage中提供的索引地址（不返回消息的地址，而是将字符串打包在消息中并转换为OSC地址）。如果在索引处找到字符串并且是有效的OSC地址，则返回。

Sets Value to address at provided Index in OSCMessage if in bounds and OSC type matches 'String' (Does NOT return address of message, rather. string packed in message and casts to OSC address). Returns if string found at index and is valid OSC address path.

Target is OSCManager

## 图示

![]($-20221218-18054201.png)

## Inputs

In: Exec.

Message: OSCMessage Structure (by ref).

Index: Integer.  

## Outputs

Out: Exec.

Value: OSCAddress Structure.

Succeeded: Boolean. Sets Value to address at provided Index in OSCMessage if in bounds and OSC type matches 'String' (Does NOT return address of message, rather. string packed in message and casts to OSC address). Returns if string found at index and is valid OSC address path..

