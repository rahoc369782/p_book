import React, { Component } from 'react'
import "./explore.scss"
import { Pointerpost } from "../../components/main/pointer_post/pointer_post"
import { ProfileSuggestions } from "../../components/main/profile_suggestion_wrapper/profile_suggestion"
let posts = [
    {
        user: {
            name: "Rahul Darekar",
            introduction: "Scoder",
            userid: 1,
            user_profile:
                "https://qphs.fs.quoracdn.net/main-qimg-bd27a5e09408f318f8ed38e7e2bb6732",
        },
        pointer: "https://forbes.com",
        post_meta_data: {
            one_word: "Stockers",
            specially_for: "About an IPO market",
            text_content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ipsum, augue vulputate pretium morbi nec cras. Eget turpis tortor neque elementum fusce in.  porttitor viverra mattis sit odio viverra est. Tempor pharetra, ultricies leo, sagittis netus.",
            media_content: [
                "https://qphs.fs.quoracdn.net/main-qimg-862f0c6a7bbae3c01ee12b9295305492-lq", "https://qphs.fs.quoracdn.net/main-qimg-43fb8906786f5517183cddf3c9ad81a5-lq", "https://qphs.fs.quoracdn.net/main-qimg-a11be159911efb8374903b9575bd8757-lq"],
            post_date: "4 hours ago",
        },
        post_stats: { views: 100, helpfull: 50, shares: 190 },
    },
    {
        user: {
            name: "Rahul Darekar",
            introduction: "Scoder",
            userid: 1,
            user_profile:
                "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JTMO7OHDK4I6XCGFJ7LDQLCHZM.jpg",
        },
        pointer: "https://forbes.com",
        post_meta_data: {
            one_word: "Stockers",
            specially_for: "About an IPO market",
            text_content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ipsum, augue vulputate pretium morbi nec cras.",
            media_content: [
                "https://qphs.fs.quoracdn.net/main-qimg-bd27a5e09408f318f8ed38e7e2bb6732", "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JTMO7OHDK4I6XCGFJ7LDQLCHZM.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUuViTPOPfnyd9RSkCapOyvKBKW58BNV_V3w&usqp=CAU"],
            post_date: "4 hours ago",
        },
        post_stats: { views: 100, helpfull: 50, shares: 190 },
    },
    {
        user: {
            name: "Rahul Darekar",
            introduction: "Scoder",
            userid: 1,
            user_profile:
                "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JTMO7OHDK4I6XCGFJ7LDQLCHZM.jpg",
        },
        pointer: "https://forbes.com",
        post_meta_data: {
            one_word: "Stockers",
            specially_for: "About an IPO market",
            text_content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ipsum, augue vulputate pretium morbi nec cras. Eget turpis tortor neque elementum fusce in.  porttitor viverra mattis sit odio viverra est. Tempor pharetra, ultricies leo, sagittis netus.",
            media_content: [
                "https://qphs.fs.quoracdn.net/main-qimg-48adcb97dac7b787362807aa79feb8bb", "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JTMO7OHDK4I6XCGFJ7LDQLCHZM.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUuViTPOPfnyd9RSkCapOyvKBKW58BNV_V3w&usqp=CAU"],
            post_date: "4 hours ago",
        },
        post_stats: { views: 100, helpfull: 50, shares: 190 },
    },
];

let profiles = [
    { profile_url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2010%2F01%2Favatar-saldana_400.jpg&q=60", profile_name: "movies_ols" },
    { profile_url: "https://static.abplive.com/wp-content/uploads/2020/01/08221127/James-Cameron-Avatar-2.jpg?impolicy=abp_cdn&imwidth=640", profile_name: "alaska_de" },
    { profile_url: "https://mui.com/static/images/avatar/1.jpg", profile_name: "alfa23" },
    { profile_url: "https://m.media-amazon.com/images/M/MV5BNDQ1NjM4ODQyNl5BMl5BanBnXkFtZTcwNjc3MTUzNA@@._V1_.jpg", profile_name: "banjire_" },
    { profile_url: "https://mui.com/static/images/avatar/1.jpg", profile_name: "alfa23" },
    { profile_url: "https://m.media-amazon.com/images/M/MV5BNDQ1NjM4ODQyNl5BMl5BanBnXkFtZTcwNjc3MTUzNA@@._V1_.jpg", profile_name: "banjire_" },
    { profile_url: "https://mui.com/static/images/avatar/1.jpg", profile_name: "alfa23" },
    { profile_url: "https://m.media-amazon.com/images/M/MV5BNDQ1NjM4ODQyNl5BMl5BanBnXkFtZTcwNjc3MTUzNA@@._V1_.jpg", profile_name: "banjire_" },
    { profile_url: "https://mui.com/static/images/avatar/1.jpg", profile_name: "alfa23" },
    { profile_url: "https://m.media-amazon.com/images/M/MV5BNDQ1NjM4ODQyNl5BMl5BanBnXkFtZTcwNjc3MTUzNA@@._V1_.jpg", profile_name: "banjire_" }
]
class Explore extends Component {
    componentDidMount() {
        console.log("Done", this.props)
    }

    render_posts = () => {
        return posts.map((items, index) => {
            return <Pointerpost key={index} post={items} />
        })
    }

    shouldComponentUpdate(nextprops, nextstate) {
        if (nextprops !== this.props && nextstate !== this.state) {
            return true
        } else {
            return false
        }
    }
    render() {
        return (
            <div className="explore_main_container">
                <div>
                    <ProfileSuggestions suggestion_data={profiles} />
                </div>

                <div>
                    {/* <h3>For you</h3> */}
                    {this.render_posts()}
                </div>
            </div>
        )
    }
}

export { Explore }
