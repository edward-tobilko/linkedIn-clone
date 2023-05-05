import { CreatePostFormListStyle } from "./createPostFormStyle";

export const CreatePostFormList = () => {
  return (
    <CreatePostFormListStyle>
      <label>
        <input type="file" accept="image/*" />
        <i className="bx bx-photo-album"></i> <span>Photo</span>
      </label>
      <label>
        <input type="file" accept="video/*" />
        <i className="bx bx-video"></i> <span>Video</span>
      </label>
      <label>
        <input type="file" accept="audio/*" />
        <i className="bx bx-music"></i> <span>Music</span>
      </label>
      <label>
        <input type="file" />
        <i className="bx bx-calendar-event"></i> <span>Event</span>
      </label>
    </CreatePostFormListStyle>
  );
};
