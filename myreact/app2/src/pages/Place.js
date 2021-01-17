// 附近页面
import { Component } from "react"
import axios from "../axios"
import { withRouter } from "react-router-dom";
import "../css/place.css";
import pimg from "../img/place.png"
class PlacePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "附近页面",
            dataArr: []
        };
        
    }

    componentDidMount() {
        let url = "/place"
        axios.get(url)
            .then((res) => {
                this.setState({
                    dataArr: res.data
                })
            })
    }

    render() {
        return (
            <div className="bigbox">
                {this.state.dataArr.map((el, index) => {
                    return (
                        <div key={el} className="box1">
                            <img className="goodsimg" src={el.img} alt="图片加载失败" />
                            <h6 className="textinfo">{el.text}</h6>
                            <div className="content-bottom">
                                <div className="bottom-left">
                                    <img className="userimg1" src={el.userimg} alt="图片加载失败" />
                                    <span className="username">{el.username}</span>
                                </div>
                                <div>
                                    <img src={pimg} className="placeimg" alt="图片加载失败"></img>
                                    <span className="distance">{el.distance}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default withRouter(PlacePage);