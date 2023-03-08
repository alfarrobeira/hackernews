import React from "react";

const Story = ({ story }) => {

    // timestamp is provided in seconds. Therefore multiplication with 1000 is required before creating the Date.
    return (
        <>
            <div className="storyTitle"><a href={story.url}>{story.title}</a></div>
            <div className="storyInfo">{story.score} points by {story.by} published on {new Date(story.time * 1000).toDateString()} | {story.id} comments</div>
        </>
    );

}

export default Story;

// temp only, example story:
// {
//     "by": "dhouston",
//     "descendants": 71,
//     "id": 8863,
//     "kids": [
//         9224,
//         8917,
//     ],
//     "score": 104,
//     "time": 1175714200,
//     "title": "My YC app: Dropbox - Throw away your USB drive",
//     "type": "story",
//     "url": "http://www.getdropbox.com/u/2/screencast.html"
// }