## zepto双指滑动插件

![](http://7fvhwe.com1.z0.glb.clouddn.com/选区_069.png)

## 需求
移动端有手势(gestures)事件，但是在安卓端兼容并不好。


## 使用

调用方式：
```js
var target = $('.tar');//双指滑动目标
	target.doubleSlider({
		dis: 10, //双指滑动距离
		back: function () {  //双指滑动回调函数
			alert('你好～');
		}
	})
```
## 例子
