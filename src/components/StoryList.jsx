import React from "react";
import Story from "./Story.jsx";

const StoryList = ({ stories }) => {
    return (
        <>
            {
                <div>
                    <div className="listHeader" id="dummy">
                        <span className="ypsilon">Y</span>
                        <span className="title">Hacker News</span>
                        <span className="navigationLinks">
                            <a href="#dummy">new</a>&nbsp;|&nbsp;
                            <a href="#dummy">past</a>&nbsp;|&nbsp; 
                            <a href="#dummy">comments</a> |&nbsp;
                            <a href="#dummy">ask</a>&nbsp;|&nbsp;
                            <a href="#dummy">show</a>&nbsp;|&nbsp;
                            <a href="#dummy">jobs</a>&nbsp;|&nbsp;
                            <a href="#dummy">submit</a>
                        </span>
                    </div>
                    <div className="storyContainer">
                        {stories.map(story => <Story key={story.id} story={story} />)}
                    </div>
                </div>
            }
        </>);
}

export default StoryList;