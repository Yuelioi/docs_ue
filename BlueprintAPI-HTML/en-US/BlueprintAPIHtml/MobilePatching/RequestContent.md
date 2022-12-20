# RequestContent

Attempt to download manifest file using specified manifest URL.. On success it will return an object that represents remote content. This object can be queried for additional information, like total content size, download size, etc.. User can choose to download and install remote content.

Target is Mobile Patching Library

## 图示

![]($-20221218-20062705.png)

## Inputs

In: Exec.

Remote Manifest URL: String. : URL from where manifest file can be downloaded. (http://my-server.com/awesomecontent.manifest).

Cloud URL: String. : URL from where content chunk data can be downloaded. (http://my-server.com/awesomecontent/clouddir).

Install Directory: String.

On Succeeded: Delegate.

On Failed: Delegate.  

## Outputs

Out: Exec.

