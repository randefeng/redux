import React, { Component } from 'react';

import { connect } from 'react-redux'
import { getData } from '../axios/axios'

class Header extends Component {


    // constructor(props){

    //     super(props);
    //     this.state={
    //         focus:false
    //     }
    // }

    componentDidMount() {
        this.props.getReq()
    }
    aa() {
        this.props._onFocus()
    }

    bb(v) {
        this.props._onBlur()
    }

    render() {
        var width

        console.log(this.props)
        if (!this.props.focus) {
            width = "250px"
        } else {
            width = "350px"
        }
        var divPost = (
            <div onMouseEnter={this.props._mousemOVE} onMouseLeave={this.props._mouseLeave} style={{ position: "absolute", top: "56px", "boxShadow": " 0 0 8px rgba(0,0,0,.2)", width: "240px", }}>
                <div style={{ display: "flex", }}>
                    <div style={{ padding: "10px" }}> 热门搜索</div>
                    <div style={{ flex: 1 }}></div>
                    <div style={{ padding: "10px" }}> 换一批</div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap ", }}>
                    {
                        this.props.hotData.map((v, index) => {
                            if (index < 10) {
                                return <div key={index} style={{ display: "flex", justifyContent: "center", width: "25%", padding: "5px" }}>{v}</div>
                            }
                            return null
                        })
                    }
                </div>
            </div>
        )
        var Flag
        if (this.props.focus || this.props.mousemOVE) {
            Flag = true
        } else {
            Flag = false
        }

        console.log(1)
        return (
            <div>
                {/* <div style={{ display: "flex", alignItems: "center", height: "38px", backgroundColor: "red" }}  >
                    <input />
                </div> */}

                
                <div className="  " style={{ height: "56px", borderBottom: "1px solid #f0f0f0" }}>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div style={{ lineHeight: "56px", textAlign: "center ", top: 0, left: 0, display: "block", width: "100px", height: "56px" }}>
                            <a href="/" style={{ color: "#666666", textDecoration: "none",fontSize:"2em" }}>简述</a>
                        </div>
                        <div style={{ width: "95px" }}>首页</div>
                        <div style={{ display: "flex", width: "95px", justifyContent: "center" }}>下载APP</div>
                        <div style={{ display: "flex", width: width, justifyContent: "center", alignItems: "center", height: "38px", borderRadius: "25px", backgroundColor: "#eee" }}  >
                            <input onBlur={this.bb.bind(this, 1)} onFocus={this.aa.bind(this)} style={{ backgroundColor: "#eee", border: "1px solid #eee" }} />
                            <div> +</div>
                            {Flag ? divPost : null}
                             
                        </div>
                        <div style={{ flex: 1, }}></div>
                        <div style={{ width: "95px", }}>Aa</div>
                        <div style={{ width: "95px", }}>登陆</div>
                        <div style={{ display: "flex", width: "95px", justifyContent: "center" }} >  注册</div>
                        <div style={{ display: "flex", width: "95px", justifyContent: "center" }} >  写文章</div>
                    </div>
                    <div>
                    </div>
                </div>

            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        focus: state.focus,
        mousemOVE: state.mousemOVE,
        hotData: state.hotData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onFocus: () => {
            dispatch({ type: "FOCUS" })
        },
        _onBlur: () => {
            dispatch({ type: "BlUR" })
        },
        getReq() {
            getData().then((data) => {
                dispatch({ type: "HOTDATA", hotData: data.data })
            })
        },
        _mouseLeave() {
            dispatch({ type: "MouseLeave11" })
        },
        _mousemOVE() {
            dispatch({ type: "MOUSEOVE" })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
