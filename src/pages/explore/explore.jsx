import React, { Component } from 'react'
import { Pointerpost } from "../../components/main/pointer_post/pointer_post"

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
                "https://qphs.fs.quoracdn.net/main-qimg-862f0c6a7bbae3c01ee12b9295305492-lq","https://qphs.fs.quoracdn.net/main-qimg-43fb8906786f5517183cddf3c9ad81a5-lq", "https://qphs.fs.quoracdn.net/main-qimg-a11be159911efb8374903b9575bd8757-lq"],
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
            <div>{this.render_posts()}</div>
        )
    }
}

export { Explore }
