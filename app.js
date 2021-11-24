function FanImg(props) {
    return <img
        style={{ objectFit: "cover", maxHeight: 350 }}
        src={props.imgsrc}
        className="rounded mx-auto d-block img-thumbnail shadow"
    />
}
function FanCardHead(props) {
    return <span><h3 className="card-title fw-light">{props.title}</h3>
        <h6 className="card-subtitle mb-2 text-muted">{props.marks}</h6></span>
}
function FanCardTag(props) {
    return <span className="badge bg-light text-black shadow">{props.tag}</span>

}
function FanCardTags(props) {
    return <p className="card-text">
        <FanCardTag tag={props.from} />
        <FanCardTag tag={props.type} />
        <FanCardTag tag={props.publish} />
        <FanCardTag tag={props.producer} />
        <br />
        <span className="badge text-black-50">内容 |</span>
        <FanCardTag tag={props.tag1} />
        <FanCardTag tag={props.tag2} />
        <FanCardTag tag={props.tag3} />
        <FanCardTag tag={props.tag4} />
        <FanCardTag tag={props.tag5} />
        <FanCardTag tag={props.tag6} />
    </p>
}
function FanCardQuote(props) {
    return <figure className="text-end fw-light">
        <blockquote className="blockquote">
            {props.quote}
        </blockquote>
        <figcaption className="blockquote-footer">{props.quotefrom}</figcaption>
    </figure>
}
function FanCardContent(props) {
    return <div className="overflow-auto mb-2 card card-body" style={{ maxHeight: 200 }}>
        {props.text}
    </div>
}
function FanCardBottons(props) {
    return <div className="btn-group shadow" role="group">
        <a className="btn btn-sm btn-outline-primary" href={"//bgm.tv/subject/" + props.bgm} target="__blank">
            <i className="bi bi-bookmarks-fill" /> 番组计划</a>
        <a className="btn btn-sm btn-outline-primary" href={"//zh.moegirl.org.cn/" + props.fan} target="__blank">
            <i className="bi bi-book-half" /> 萌娘百科</a>
        <div className="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" className="btn btn-sm btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-play-btn-fill" /> 观看
            </button>
            <ul className="dropdown-menu shadow" aria-labelledby="btnGroupDrop1">
                <li><h6 className="dropdown-header">正版源</h6></li>
                <li><a className="dropdown-item" href={"//search.bilibili.com/bangumi?keyword=" + props.fan} target="__blank">搜索 哔哩哔哩动画</a></li>
                <li><a className="dropdown-item" href={"//www.acfun.cn/search?type=bgm&keyword=" + props.fan} target="__blank">搜索 Acfan</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><h6 className="dropdown-header">影视站</h6></li>
                <li><a className="dropdown-item" href={"//www.agefans.vip/search?query=" + props.fan} target="__blank">搜索 Agefans</a></li>
                <li><a className="dropdown-item" href={"//www.ysjdm.net/index.php/vod/search.html?wd=" + props.fan} target="__blank">搜索 异世界动漫</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><h6 className="dropdown-header">其他</h6></li>
                <li><a className="dropdown-item" href={"//www.baidu.com/s?wd=" + props.fan + "%20%E5%9C%A8%E7%BA%BF%E8%A7%82%E7%9C%8B"} target="__blank">百度搜索在线观看</a></li>
                <li><a className="dropdown-item" href="https://anime.magma.ink/" target="__blank">前往熔岩番剧库 [开发中]</a></li>
            </ul>
        </div>
    </div>
}
function FanCardBody(props) {
    return <div className="card-body text-center">
        <FanCardHead title={props.title} marks={props.marks} />
        <FanCardTags from={props.from} type={props.type} publish={props.publish} producer={props.producer} tag1={props.tag1} tag2={props.tag2} tag3={props.tag3} tag4={props.tag4} tag5={props.tag5} tag6={props.tag6} />
        <FanCardQuote quote={props.quote} quotefrom={props.quotefrom} />
        <FanCardContent text={props.text} />
        <FanCardBottons bgm={props.bgm} fan={props.fan} />
    </div>
}
function FanCard(props) {
    return <div className="mb-3 col-sm-6 col-md-4">
        <FanImg imgsrc={props.imgsrc} />
        <FanCardBody title={props.title} marks={props.marks}
            from={props.from} type={props.type} publish={props.publish} producer={props.producer}
            tag1={props.tag1} tag2={props.tag2} tag3={props.tag3} tag4={props.tag4} tag5={props.tag5} tag6={props.tag6}
            quote={props.quote} quotefrom={props.quotefrom} text={props.text} bgm={props.bgm} fan={props.fan} />
    </div>

}
const text = <span>
    <h4>我们所经历的每个平凡的日常，也许就是连续发生的奇迹。</h4><p>123</p><p>123</p><p>123</p><a href="#" className="btn btn-primary btn-sm">123</a>
</span>






const element = <div className="row g-md-1 justify-content-evenly">
    <FanCard
        imgsrc="https://s-sh-2164-magma-ink.oss.dogecdn.com/wp-content/uploads/2021/09/1631682467-333349_nnTfr.jpg"
        title="迦希女王不会放弃" fan="迦希女王不会放弃" bgm="123456" marks="⭐5.5 💘超爱 👍日常类推荐"
        from="7 月新番" type="漫改" publish="昆布わかめ" producer="SILVER LINK."
        tag1="喜剧" tag2="日常" tag3="萌系 (大概)" tag4="" tag5="" tag6=""
        quote="我们所经历的每个平凡的日常，也许就是连续发生的奇迹。" quotefrom="《日常》"
        text={<span>
        <h4>我们所经历的每个平凡的日常，也许就是连续发生的奇迹。</h4><p>123</p><p>123</p><p>123</p><a href="#" className="btn btn-primary btn-sm">123</a></span>}/>
    <FanCard
        imgsrc="https://s-sh-2164-magma-ink.oss.dogecdn.com/wp-content/uploads/2021/09/1631682467-333349_nnTfr.jpg"
        title="迦希女王不会放弃" fan="迦希女王不会放弃" bgm="123456" marks="⭐5.5 💘超爱 👍日常类推荐"
        from="7 月新番" type="漫改" publish="昆布わかめ" producer="SILVER LINK."
        tag1="喜剧" tag2="日常" tag3="萌系 (大概)" tag4="" tag5="" tag6=""
        quote="我们所经历的每个平凡的日常，也许就是连续发生的奇迹。" quotefrom="《日常》"
        text={text} />
        <FanCard
        imgsrc="https://s-sh-2164-magma-ink.oss.dogecdn.com/wp-content/uploads/2021/09/1631682467-333349_nnTfr.jpg"
        title="迦希女王不会放弃" fan="迦希女王不会放弃" bgm="123456" marks="⭐5.5 💘超爱 👍日常类推荐"
        from="7 月新番" type="漫改" publish="昆布わかめ" producer="SILVER LINK."
        tag1="喜剧" tag2="日常" tag3="萌系 (大概)" tag4="" tag5="" tag6=""
        quote="我们所经历的每个平凡的日常，也许就是连续发生的奇迹。" quotefrom="《日常》"
        text={text} />
        <FanCard
        imgsrc="https://s-sh-2164-magma-ink.oss.dogecdn.com/wp-content/uploads/2021/09/1631682467-333349_nnTfr.jpg"
        title="迦希女王不会放弃" fan="迦希女王不会放弃" bgm="123456" marks="⭐5.5 💘超爱 👍日常类推荐"
        from="7 月新番" type="漫改" publish="昆布わかめ" producer="SILVER LINK."
        tag1="喜剧" tag2="日常" tag3="萌系 (大概)" tag4="" tag5="" tag6=""
        quote="我们所经历的每个平凡的日常，也许就是连续发生的奇迹。" quotefrom="《日常》"
        text={text} />
        <FanCard
        imgsrc="https://s-sh-2164-magma-ink.oss.dogecdn.com/wp-content/uploads/2021/09/1631682467-333349_nnTfr.jpg"
        title="迦希女王不会放弃" fan="迦希女王不会放弃" bgm="123456" marks="⭐5.5 💘超爱 👍日常类推荐"
        from="7 月新番" type="漫改" publish="昆布わかめ" producer="SILVER LINK."
        tag1="喜剧" tag2="日常" tag3="萌系 (大概)" tag4="" tag5="" tag6=""
        quote="我们所经历的每个平凡的日常，也许就是连续发生的奇迹。" quotefrom="《日常》"
        text={text} />
</div>


ReactDOM.render(
    element,
    document.getElementById('root')
);
