import React, { Component } from 'react';

import { connect } from 'react-redux'
// import { getData } from '../axios/axios'
var list = [{"object":{"type":1,"data":{"id":35217039,"title":"想让自己强大，放下这十样东西","slug":"ed0f8fd8ee87","list_image_url":"","public_abbr":"来源‖不停游泳的飞鱼 一个人懂得放下才能走得远 菩提本无树，明镜亦非台，本来无一物，何处惹尘埃。 1、面子 有时候...","commentable":true,"important_collection":null,"user":{"id":6167143,"nickname":"621情结","slug":"8f1447669a55","avatar":"http://upload.jianshu.io/users/upload_avatars/6167143/b3be6c08-61ab-4cf0-b8b5-9936a41f5d1e.jpg"},"public_comments_count":7,"total_rewards_count":0,"likes_count":78}}},{"object":{"type":1,"data":{"id":34799667,"title":"20几岁程序员晒出工资条，称养不活自己？网友：比我赚的多！","slug":"eb20a35c54e8","list_image_url":"http://upload-images.jianshu.io/upload_images/13133049-c6cd7532c0adeb9f.png","public_abbr":"职业不分高低，但有时候一个人的收入却代表了这个人的能力。我们上大学为了什么，为了一份体面的工作，我们工作为了什么，...","commentable":true,"important_collection":null,"user":{"id":13133049,"nickname":"IT智云编程","slug":"560b7bb7b879","avatar":"http://upload.jianshu.io/users/upload_avatars/13133049/e3726c14-dcb1-46d9-a153-1f82aadd88dd.jpeg"},"public_comments_count":75,"total_rewards_count":0,"likes_count":80}}},{"object":{"type":1,"data":{"id":35963249,"title":"男子拿圣旨鉴定真假，专家要求上交，男子说2个字，专家很尴尬","slug":"06a2e1e8de84","list_image_url":"http://upload-images.jianshu.io/upload_images/10256258-6d8879ae3100c48c.jpg","public_abbr":"古时候,人们讲究事死如事生，尤其王室皇家，更是如此，去世后会陪葬众多金银宝贝，所以千百年来，从陵墓里传出的宝贝不计...","commentable":true,"important_collection":null,"user":{"id":10256258,"nickname":"月儿秘史","slug":"856c51e29c77","avatar":"http://upload.jianshu.io/users/upload_avatars/10256258/2ee3db52-f1bf-45de-8577-55214f067b19.jpg"},"public_comments_count":75,"total_rewards_count":0,"likes_count":92}}},{"object":{"type":1,"data":{"id":38621864,"title":"支付宝上赚钱7个小方法，月入1万其实很简单","slug":"4682a27eea2b","list_image_url":"","public_abbr":"别人都在用支付宝赚钱，但你只会用支付宝消费的。 今天我们来重新认识一下我们的老朋友“支付宝”，讲讲支付神器上都有哪...","commentable":true,"important_collection":null,"user":{"id":15505800,"nickname":"寒潭鹤影写小说","slug":"5831cbc61c00","avatar":"http://upload.jianshu.io/users/upload_avatars/15505800/ee04fd4a-5dfe-45b6-a966-e88dc541299b.jpg"},"public_comments_count":11,"total_rewards_count":0,"likes_count":104}}},{"object":{"type":1,"data":{"id":34718635,"title":"每天晨起得坚持的3个好习惯","slug":"a6ea7c6d376c","list_image_url":"","public_abbr":"现在越来越多人开始注重养生了，只要科学合理，对身体是有好处的。下面要介绍的3个好习惯，每一个只需要花费你早起后 3...","commentable":true,"important_collection":null,"user":{"id":6777268,"nickname":"来艾","slug":"bbf8d059ee1b","avatar":"http://upload.jianshu.io/users/upload_avatars/6777268/ebd2998d-285b-43a9-9d42-e64ca241d68e.jpg"},"public_comments_count":38,"total_rewards_count":0,"likes_count":366}}},{"object":{"type":1,"data":{"id":35551453,"title":"强者之所以强，看到这些漫画你就懂了……","slug":"ed088d74f8b0","list_image_url":"http://upload-images.jianshu.io/upload_images/13936095-c7159f0d564d6506.png","public_abbr":"             来源：丽睿客                                      ...","commentable":true,"important_collection":null,"user":{"id":13936095,"nickname":"缘灭山上","slug":"41d9118a39b9","avatar":"http://upload.jianshu.io/users/upload_avatars/13936095/22fd74d2-ff17-40e2-bebe-88d80b3c6380.jpg"},"public_comments_count":5,"total_rewards_count":0,"likes_count":20}}},{"object":{"type":1,"data":{"id":36943028,"title":"2018-11-19 | 每日盘后：3买的3买，走势花开如同绕口令","slug":"bf38e3572482","list_image_url":"","public_abbr":"注意：以下是作者在学习、实践缠论过程中，产生的系列思考与修正、更新。它是作者在自己的实践中得到的体会与理论构建。不...","commentable":true,"important_collection":null,"user":{"id":7178782,"nickname":"阱蛙","slug":"ccd51bb80f69","avatar":"http://upload.jianshu.io/users/upload_avatars/7178782/d29e80a9-abe8-4559-9d38-70f9eb8cb1de.jpg"},"public_comments_count":15,"total_rewards_count":0,"likes_count":23}}},{"object":{"type":1,"data":{"id":33367680,"title":"二婚（十一）","slug":"ca76ab677d0e","list_image_url":"","public_abbr":"“啥？医生，你是说我老婆怀的是一对双？” 杨海萍的身子越来越重了，才六个月的身孕，肚子看着特别的大，在李军的几次央...","commentable":true,"important_collection":null,"user":{"id":4048420,"nickname":"淡然若怡","slug":"756ba09844d6","avatar":"http://upload.jianshu.io/users/upload_avatars/4048420/f7bc97c5-29b1-4eb3-91a2-1fbb06bbe1bc.jpg"},"public_comments_count":1,"total_rewards_count":0,"likes_count":6}}},{"object":{"type":1,"data":{"id":35190300,"title":"“你见过魔鬼么？” “我带你看看人性”","slug":"965c91cef608","list_image_url":"http://upload-images.jianshu.io/upload_images/2321684-6809715896042515","public_abbr":"他演过无数大反派，可能你记不住他的名字，但只要看到他的照片一定会恍然大悟地说一句， “哦，就是那个大坏蛋啊！” 这...","commentable":true,"important_collection":null,"user":{"id":2321684,"nickname":"小青蛙看电影","slug":"f0ce3a4067b1","avatar":"http://upload.jianshu.io/users/upload_avatars/2321684/d599600c-bbd5-4d11-9a1a-b188ff9e5274.jpg"},"public_comments_count":7,"total_rewards_count":0,"likes_count":74}}},{"object":{"type":1,"data":{"id":35074191,"title":"Kafka的时代已经过去了，未来是Pulsar的吗？","slug":"45e74fc4c337","list_image_url":"","public_abbr":"今天InfoWorld最佳开源数据平台奖公布，连续两年入选的 Kafka 这次意外失手，pulsar取而代之。 p...","commentable":true,"important_collection":null,"user":{"id":13192523,"nickname":"大数据首席数据师","slug":"f962dbbd9420","avatar":"http://upload.jianshu.io/users/upload_avatars/13192523/1b8905e6-3ff0-4e93-bad2-c875dce6e98e.png"},"public_comments_count":1,"total_rewards_count":0,"likes_count":24}}},{"object":{"type":1,"data":{"id":37450652,"title":"基于 Ubuntu 的精美发行版，最漂亮的 Linux 系统 – Elementary OS 中文版","slug":"a40a7cf9f371","list_image_url":"http://upload-images.jianshu.io/upload_images/13355163-cfd34c6af37fe770.jpg","public_abbr":"Elementary OS系统是一款基于Ubuntu精心打磨美化的桌面Linux发行版，号称 “最美的 Linux...","commentable":true,"important_collection":null,"user":{"id":13355163,"nickname":"盒子部落","slug":"de6f5b89e25a","avatar":"http://upload.jianshu.io/users/upload_avatars/13355163/944d0fe0-c894-4456-ae54-04f80ab10f32.png"},"public_comments_count":8,"total_rewards_count":0,"likes_count":135}}},{"object":{"type":1,"data":{"id":38396455,"title":"性开放的你，敢去医院体检吗？","slug":"0bbbbbaa4137","list_image_url":"http://upload-images.jianshu.io/upload_images/10673609-c0a20c25722e2cdc.jpg","public_abbr":"男： 约吗 ? 女： ≥18cm ? 男： 算了，呵呵、呵呵、呵呵…… 怎么啦? 伤到自尊心了，怎么老是学马呵呵叫...","commentable":true,"important_collection":null,"user":{"id":10673609,"nickname":"汗水鱼","slug":"e2c845f702f9","avatar":"http://upload.jianshu.io/users/upload_avatars/10673609/82e738cb-e9f2-4b86-a732-b72b7e9ec9b2.jpg"},"public_comments_count":33,"total_rewards_count":0,"likes_count":61}}},{"object":{"type":1,"data":{"id":35336778,"title":"请家长‖140字微小说","slug":"a4d1eff51ed3","list_image_url":"","public_abbr":"“老师，咱班A男生去B女生家睡觉了。同学们都知道了，他们也承认了。” 班主任:“你女儿带男生回家过夜了，你知道了吗...","commentable":true,"important_collection":null,"user":{"id":13530470,"nickname":"蜗牛般的修行","slug":"7a7dc44e91b4","avatar":"http://upload.jianshu.io/users/upload_avatars/13530470/e2070248-fb3f-48ae-a403-24936710c807"},"public_comments_count":7,"total_rewards_count":0,"likes_count":15}}},{"object":{"type":1,"data":{"id":34540921,"title":"30岁已婚女：我降低了要求才找到老公","slug":"0cd804451aec","list_image_url":"","public_abbr":"以下故事根据读者留言改编，为了方便阅读故用第一人称。 情感故事： 我今年30岁，去年才结的婚。身高160，微胖型身...","commentable":true,"important_collection":null,"user":{"id":2855156,"nickname":"小诗谈婚恋","slug":"8b1b34774140","avatar":"http://upload.jianshu.io/users/upload_avatars/2855156/5828fc26-847d-40b1-ad98-03003cb739b8.jpg"},"public_comments_count":16,"total_rewards_count":0,"likes_count":37}}},{"object":{"type":1,"data":{"id":34664991,"title":"史上最牛的学习方法——费曼技巧","slug":"31460f1e40e7","list_image_url":"http://upload-images.jianshu.io/upload_images/8302961-82dda357937df3c7.png","public_abbr":"理查德•费曼——美国最伟大的物理学家，是继爱因斯坦之后最聪明的人，同时也是一个非常聪明、又爱耍宝、卖萌、开玩笑的人...","commentable":true,"important_collection":null,"user":{"id":8302961,"nickname":"Andy正在输入","slug":"8107b063b2d7","avatar":"http://upload.jianshu.io/users/upload_avatars/8302961/4ba3eaae-2ca6-40ea-9c83-b200d032c4cb.jpg"},"public_comments_count":6,"total_rewards_count":0,"likes_count":371}}},{"object":{"type":1,"data":{"id":35814356,"title":"中黄毒太深的解毒办法 - 擦除脑海里的色情图像","slug":"5efd1677934e","list_image_url":"http://upload-images.jianshu.io/upload_images/1637825-f9c61fe59b44a9cb","public_abbr":"念头实战 心魔的表现就是邪念袭脑，而心魔的三种表现形式为： 01念头 02图像 03微妙的感觉 第一种念头，是比较...","commentable":true,"important_collection":null,"user":{"id":1637825,"nickname":"青莲佛子","slug":"398e741d1898","avatar":"http://upload.jianshu.io/users/upload_avatars/1637825/7841f5f1-62d6-4238-a9c2-f5d366f51317.jpg"},"public_comments_count":0,"total_rewards_count":0,"likes_count":20}}},{"object":{"type":1,"data":{"id":35021649,"title":"可惜啊   弄脏了身体的农村女孩","slug":"f86cc7abc38d","list_image_url":"http://upload-images.jianshu.io/upload_images/4550708-67c7aa751e42f2a8.jpg","public_abbr":"文/安然 当我还在实习的时候，我做了她的心理辅导老师。 八月伊始，我在外科忙得不可开交！ 我收到了六年没有联系了的...","commentable":true,"important_collection":null,"user":{"id":4550708,"nickname":"追忆随梦而远","slug":"e42b51daddbd","avatar":"http://upload.jianshu.io/users/upload_avatars/4550708/9d16bbf1-bdb6-4730-bfaf-2530647e7c44.jpg"},"public_comments_count":60,"total_rewards_count":0,"likes_count":51}}},{"object":{"type":1,"data":{"id":35405125,"title":"男人会把最重要的三样东西，送给最爱的女人，从不吝啬，别不信","slug":"d38dd2ef6c09","list_image_url":"http://upload-images.jianshu.io/upload_images/5135554-378bf380c0868473.jpeg","public_abbr":"男人对女人的爱是直接的，更是物质的，他们更去年跟相遇用事实说话，大部分男人不擅长甜言蜜语，他们认为把自己拥有的都送...","commentable":true,"important_collection":null,"user":{"id":5135554,"nickname":"魏亭亭","slug":"08fab6d5eca0","avatar":"http://upload.jianshu.io/users/upload_avatars/5135554/6a3f341a-3824-4e3e-9d6d-038805056202.png"},"public_comments_count":17,"total_rewards_count":0,"likes_count":73}}},{"object":{"type":1,"data":{"id":35505435,"title":"简书脱单","slug":"0aa804ff5afd","list_image_url":"http://upload-images.jianshu.io/upload_images/12530996-f8ab880a55c3457a.jpg","public_abbr":"坐标山东 孝顺，坚强，乐观，直性子，能静能动，偶尔有点小任性。 不要莫名其妙对我发脾气， 我也不是吃泡泡糖长大的。...","commentable":true,"important_collection":null,"user":{"id":12530996,"nickname":"动画相机","slug":"e33047842aad","avatar":"http://upload.jianshu.io/users/upload_avatars/12530996/31f47b84-4c34-4996-803b-24d8fe4b4b1e.jpg"},"public_comments_count":43,"total_rewards_count":0,"likes_count":21}}},{"object":{"type":1,"data":{"id":36735805,"title":"日赚3w的思维模式","slug":"de38c98d982b","list_image_url":"http://upload-images.jianshu.io/upload_images/2135127-b66376bc2071cf96","public_abbr":"市场上的好产品未必能战胜坏产品。 同样的产品，通过百度和淘宝两个不同渠道销售，百度的售价通常比淘宝高，极端情况可高...","commentable":true,"important_collection":null,"user":{"id":2135127,"nickname":"灰产小火","slug":"59a0b6b164fd","avatar":"http://upload.jianshu.io/users/upload_avatars/2135127/44f210ea-de4e-4ce4-9bd2-ac553c4daee9.JPG"},"public_comments_count":1,"total_rewards_count":0,"likes_count":8}}}]
class ListDetil extends Component {


    // constructor(props){

    //     super(props);
    //     this.state={
    //         focus:false
    //     }
    // }


    render() {
        return (
            <div style={{ display: "flex" }}>
                <div style={{ width: "500px", marginLeft: "200px", }}>
                    {
                        list.map((item ) => {
                            return (<div style={{ borderBottom: "thick dotted #ff0000", marginBottom:'15px',marginTop:'10px' }}>
                                <h2>{item.object.data.title}</h2>
                                <p style={{ overflow: " hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.object.data.public_abbr}</p>
                                <div style={{ display: "flex" }}>
                                    <span>作者：</span>
                                    <span>评论：</span>
                                    <span>👍</span>
                                </div>
                            </div>)
                        })
                    }
                </div>
                <div>12321</div>
            </div>
        );
    }
}


// const mapStateToProps = state => {
//     return {
//         focus: state.focus,
//         mousemOVE: state.mousemOVE,
//         hotData: state.hotData
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         _onFocus: () => {
//             dispatch({ type: "FOCUS" })
//         },
//         _onBlur: () => {
//             dispatch({ type: "BlUR" })
//         },
//         getReq() {
//             getData().then((data) => {
//                 dispatch({ type: "HOTDATA", hotData: data.data })
//             })
//         },
//         _mouseLeave() {
//             dispatch({ type: "MouseLeave11" })
//         },
//         _mousemOVE() {
//             dispatch({ type: "MOUSEOVE" })
//         }
//     }
// }


export default connect(null, null)(ListDetil);
