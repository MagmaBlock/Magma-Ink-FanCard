$(document).ready(() => {

    $.ajax({
        url: "./api.json",  //默认当前页
        success: function (result) {  //请求成功回调
            var fanCardData = result
            // 按顺序生成番剧卡的容器
            for (var i = 0; i < fanCardData.length; i++) {
                $("#root").append('<div id=fancard-' + i + '></div>')
                $('#fancard-' + i).attr('cardId', i)
            }
            // 再次循环，生成所有静态数据
            for (var i = 0; i < fanCardData.length; i++) {




                // 生成当前i的评分Html
                var marks = fanCardData[i].marks
                var marksHtml = ''
                // 如果是整分
                if (marks % 1 == 0) {
                    // 加星星
                    for (var t = 0; t < marks; t++) {
                        marksHtml = marksHtml + '<i class="bi bi-star-fill"></i>'
                    }
                    marksHtml = marksHtml + ' <span>' + marks + '分</span>'
                }
                if (marks % 1 == 0.5) {
                    // 在前面加星星
                    for (var t = 1; t < marks; t++) {
                        marksHtml = '<i class="bi bi-star-fill"></i>' + marksHtml
                    }
                    marksHtml = marksHtml + '<i class="bi bi-star-half"></i> <span>' + marks + '分</span>'
                }

                // 如果有自定义标题，生成自定义标题
                var titleHtml = makeTitle()
                function makeTitle() {
                    if (fanCardData[i].title == undefined) {
                        return titleHtml = '获取中...'
                    }
                    else {
                        return titleHtml = fanCardData[i].title
                    }
                }

                var cardHtml = fanCardData[i].id + '<br>' + marksHtml + '<br>' + titleHtml + '<br>' + fanCardData[i].tags + '<br>' + fanCardData[i].comment
                $("#fancard-" + i).append(cardHtml)






            }
            // 异步获取数据和渲染
            for (var i = 0; i < result.length; i++) {
                let fanCardId = i
                // 根据当前卡片获取 BgmAPI
                $.ajax({
                    url: "//bgm-api.5t5.top/v0/subjects/" + result[i].id,
                    success: (result) => {
                        console.log(result)
                        console.log('i是',fanCardId)
                        var imgHtml = '<img src="'+ result.images.large+'">' 
                        $("#fancard-" + fanCardId).append(imgHtml)
                    },
                });


            }
        },
        error: function (e) {  //fanCardData 请求超时回调
            if (e.statusText == "timeout") {
                alert("请求超时")
            }
        },
        complete: function () { }, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
    })







})