# imgVew.js简单的div内鼠标拖动大图查看全景插件

使用方法：

$('#imageView').imageView({

            width: 1122,//容器宽度
            
            height:700,//容器高度
            
            cursor:'move',//鼠标按下时的显示cursor
            
            imgwidth:$img.width(),//图片宽度
            
            imgheight:$img.height()//图片高度
            
        });//注：在编写html时最好用css设置一下大图的宽高，以方便在图片未加载完之前可以正常获取图片的宽高
        

#兼容性

兼容各个主流浏览器、ie9+

#压缩包

[imgView.min.js](https://github.com/wdq13658373674/imgView/blob/master/imgView.min.js)

#demo

[demo](https://github.com/wdq13658373674/imgView/blob/master/imgView.min.js)
