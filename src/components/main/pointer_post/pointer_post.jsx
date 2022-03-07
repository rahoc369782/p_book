import React, { useState } from 'react'
import "./pointer_post.scss";
import more from "../../../assets/visuals/more.svg";
import love from "../../../assets/visuals/love.svg";
import shares from "../../../assets/visuals/share.svg";
import trend from "../../../assets/visuals/trend.svg";
import { OptionsDrawer } from '../options_drawer/options_drawer';
import { MediaSlider } from '../../reusable/media_slider/media_slider';


const stats_return = (stats) => {
    console.log('stats: ', stats);
    let stat_text = ""
    for (let stat in stats) {
        stat_text += ` ${stat_text !== "" ? "." : ""} ${stats[stat]} ${stat}`;
    }
    return stat_text
}

const Options = [{ title: "save pointer", callback: () => console.log("1") }, { title: "More like this", callback: () => null }, { title: "Report", callback: () => null }, , { title: "Cancel", callback: () => null }]
const Pointerpost = ({ post }) => {
    let { user, post_meta_data, post_stats, pointer } = post
    const [OptionsDrawerStatus, setOptionsDrawerStatus] = useState(false)
    return (
        <div className="post_container">
            <div className="post_subcontainer">
                <div className="post_textual_data_container">

                    <div className="post_header_part">
                        <div className="post_header_one">
                            <div className="profile_img_post">
                                <img src={user.user_profile} alt='profile_image' className="post_profile_image" />
                            </div>
                            <div className="post_metadata">
                                <span className='post_user_name'>{user.name}</span>
                                <div>
                                    <span className="user_introduction">{user.introduction}</span>
                                    <span className="user_post_date"> . {post_meta_data.post_date}</span>
                                </div>
                            </div>
                        </div>
                        <div className="post_header_two">
                            <a className="post_one_word" target="_blank" href={pointer}>{post_meta_data.one_word}</a>
                        </div>
                    </div>
                    <div className="post_content_part">
                        <div className="post_specially_for">
                            {post_meta_data.specially_for}
                        </div>
                        <p className="post_textual_content">{post_meta_data.text_content}</p>
                    </div>
                </div>
                {post_meta_data.media_content.length !== 0 ?
                    <div className="post_media_part">
                        <MediaSlider media_content={post_meta_data.media_content} />
                    </div>
                    :
                    <></>
                }
                <div className="post_stats_container">
                    <div className="post_stats_subcontainer">
                        <span>{stats_return(post_stats)}</span>
                        <div onClick={() => setOptionsDrawerStatus(!OptionsDrawerStatus)}>
                            <img src={more} />
                        </div>

                    </div>
                </div>
                <div className="post_stats_action_container">
                    <div className="post_stats_action_subcontainer">
                        <div className="post_stats_action">
                            <img src={love} alt="like" />
                            <span>valuable</span>
                        </div>
                        <div className="post_stats_action">
                            <img src={shares} alt="like" />
                            <span>share</span>
                        </div>
                        <div className="post_stats_action">
                            <img src={trend} alt="like" />
                            <span>trend</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <OptionsDrawer options={Options} open_status={OptionsDrawerStatus} setOptionsDrawerStatus={setOptionsDrawerStatus} />
            </div>
        </div>
    )
}

export { Pointerpost }
