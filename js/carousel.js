var ins 
function initCaroulsel(idName, data) {
	var initData = data;
	initData["elem"]="#" + idName
	layui.use('carousel', function() {
			var width = document.body.clientWidth
			var height = document.body.clientHeight
			var carousel = layui.carousel;
			//建造实例
			 ins = carousel.render(initData);
		});
	}
function changeData(data){
	ins.reload(data)
}