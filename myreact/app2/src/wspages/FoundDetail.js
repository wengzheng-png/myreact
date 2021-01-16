import React from 'react';
import axios from "../wsaxios"
import "../wscss/FoundDetail.css"
class FoundDetail extends React.Component {
    constructor(props) {
        super(props)
        this.id = this.props.location.pathname.slice(14);
        this.state = {
            dataArr: {},
            comments: "啊啊啊！！太好看了",
            commentsArr: []

        };
    }

    componentDidMount() {
        let url = "/getdetail"
        let data = {
            params: { id: this.id }
        }
        axios.get(url, data)
            .then((res) => {
                console.log(res);
                this.setState({
                    dataArr: res.data[0]
                })
            })
    }

    render() {
        return (
            <div>
                {/*返回上一页   用户头像  用户名字   关注 */}

                <div className="user">
                    <img src={this.state.dataArr.userimg} alt="图片加载失败" />
                    <span>{this.state.dataArr.username}</span>
                    <span className="right">关注</span>
                </div>

                <div className="goods">
                    {/* 商品图片 */}
                    <div className="photobox">
                        <img src={this.state.dataArr.img} alt="图片加载失败" />
                    </div>
                    {/* 商品名称 */}
                    <p className="text01">{this.state.dataArr.name}</p>
                    {/* 商品简介 */}
                    <p className="text02">{this.state.dataArr.text}</p>
                </div>

                {/*用户头像  评论 */}
                <div className="comments1">
                    <img src={this.state.dataArr.userimg} />
                    <span>{this.state.dataArr.username}</span>
                    <p>{this.state.comments}</p>
                </div>

                {/* 分隔 */}
               <div className="fengge"></div>

                {/* 用户输入评论 */}
                <div className="comments">
                    <input type="text" className="userinput" placeholder="说点什么~" />
                    <input type="button" className="btn" value="发表" />
                    <span>点赞数：{this.state.dataArr.praise}</span>
                </div>

            </div>
        )
    }
}

export default FoundDetail;