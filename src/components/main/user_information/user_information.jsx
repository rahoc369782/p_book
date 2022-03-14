import React, { useState } from 'react'
import "./user_information.scss";
import { Avtaarbadge } from '../../reusable/avataar_badge/avataar_badge';

let user = {
    username: "_rahoc_dar",
    twoword_introduction: "Things creator",
    about_user: "An essay is, generally, a piece of writing that gives the author's own argument, but the definition is vague, overlapping.",
    profile_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYRldrYp8rAUVWdWEYkuoir3abUwsskDC76g&usqp=CAU",
    width: 90,
    height: 90
}
const UserInformation = ({ userdata }) => {
    return (
        <div className="user_information_container">
            <div className="user_information_subcontainer">
                <div>
                    <div className="user_profile_section1">
                        <Avtaarbadge url={user.profile_url} width={user.width} height={user.height} />
                        <div data="username_intro">
                            <h3>{user.username}</h3>
                            <span>{user.twoword_introduction}</span>
                            <div data="counts_stats_container">

                            </div>
                        </div>
                    </div>
                    <div className="user_about">
                        <p>{user.about_user}</p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export { UserInformation }