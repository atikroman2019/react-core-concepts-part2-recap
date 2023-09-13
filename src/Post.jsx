import "./Post.css";

export default function Post({ post }) {
  const { title, body, id, userId } = post;
  return (
    <div className="post">
      <h4>Title:{title}</h4>
      <p>userId: {userId} </p>
      <p>postId: {id}</p>
      <p>{body}</p>
    </div>
  );
}
