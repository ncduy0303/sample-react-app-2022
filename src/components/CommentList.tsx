import CommentItem from "./CommentItem";
import Comment from "../types/Comment";
import CommentForm from "./CommentForm";
import { useState } from "react";

import React from "react";

type Props = {
    styled: boolean;
};

const BasicCommentList: React.FC<Props> = ({ styled }: Props) => {
    const [comments, setComments] = useState<Comment[]>([
        {
            body:
                "Any fool can write code that a computer can understand.\n" +
                "Good programmers write code that humans can understand.\n" +
                " ~ Martin Fowler",
            author: "Benedict",
            timestamp: new Date(2022, 10, 28, 10, 33, 30),
        },
        {
            body:
                "Code reuse is the Holy Grail of Software Engineering.\n" +
                " ~ Douglas Crockford",
            author: "Casey",
            timestamp: new Date(2022, 11, 1, 11, 11, 11),
        },
        {
            body:
                "Nine people can't make a baby in a month.\n" +
                " ~ Fred Brooks",
            author: "Duuet",
            timestamp: new Date(2022, 11, 2, 10, 30, 0),
        },
    ]);

    const handleNewComment = (comment: Comment) => {
        setComments([...comments, comment]);
    };

    return (
        <div>
            <ul>
                {comments.map((comment, index) => (
                    <CommentItem comment={comment} styled={styled} key={index} />
                ))}
            </ul>
            <CommentForm onSubmit={handleNewComment} />
        </div>
    );
};

export default BasicCommentList;
