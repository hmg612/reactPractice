import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인제",
        comment: "안녕하세요, 소플입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요~!",
    },
    {
        name: "강민경",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

// function CommentList(props) {
//     return (
//         <div>
//             <Comment name={"홍길동"} comment={"안녕하세요. 홍길동입니다."}/>
//             <Comment name={"김길동"} comment={"안녕하세요. 김길동입니다."}/>
//         </div>
//     );
// }

export default CommentList;