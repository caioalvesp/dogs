import React from "react";
import Enviar from "../../Assets/enviar.svg?react";

const PhotoCommentsForm = ({ id }) => {
  const [comment, setComment] = React.useState("");

  return (
    <form>
      <textarea
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />

      <button>
        <Enviar />
      </button>
    </form>
  );
};

export default PhotoCommentsForm;
