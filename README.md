## zepto双指滑动插件

![](http://7fvhwe.com1.z0.glb.clouddn.com/选区_069.png)


双指滑动触发事件。
## 使用
首先需要引用
调用方式：
```js
var target = $('.tar');
	target.doubleSlider({
		dis: 10, //双指滑动距离
		back: function () {  //双指滑动回调函数
			alert('你好～');
		}
	})
```
## 例子
