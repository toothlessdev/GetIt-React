import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"김대건",
        comment:"리액트 재밋넹~",
    },
    {
        name:"고등래퍼 김하온",
        comment:"그게 뭐가 됐든지 부모님이 주신 이름처럼 나는 그저 온 김에 하지~ just swervin'",
    },
    {
        name:"소코도모",
        comment:"Move ~ Jumping Jumping Jumping Jumping 뛰어놀았어~~",
    },
    {
        name:"쿤디판다",
        comment:"오늘 이곳에 서 난 불러~ I will be my on hero~ ",
    }
];

function CommentList(props){
    return (
        <div>
            {
                comments.map((comment) => {
                    return (
                        <Comment name={comment.name} comment={comment.comment}></Comment>
                    );
                })
            }
        </div>
    )
}

export default CommentList;