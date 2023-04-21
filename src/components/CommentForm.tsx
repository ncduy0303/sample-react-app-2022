import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import Comment from "../types/Comment";

type Props = {
  onSubmit: (comment: Comment) => void;
};

const CommentForm: React.FC<Props> = ({ onSubmit }) => {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComment = {
      author,
      body,
      timestamp: new Date(),
    };
    onSubmit(newComment);
    setAuthor("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <TextField
        label="Comment"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        multiline
        minRows={4}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Add Comment
      </Button>
    </form>
  );
};

export default CommentForm;
