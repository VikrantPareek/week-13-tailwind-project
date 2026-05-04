export function ProfileIcon(props) {
  return (
    <div>
      <img
        className={`h-${props.height} rounded-lg ${props.className}`}
        src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg"
        alt="profile-image"
      />
    </div>
  );
}
