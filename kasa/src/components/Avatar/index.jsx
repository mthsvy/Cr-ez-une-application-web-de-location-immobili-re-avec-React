import "./avatar.scss";
function Avatar({ name, picture }) {
  return (
    <div className="avatar">
      <div className="info">
        <p>{name}</p>
      </div>
      <div className="circle">
        <img src={picture} alt={name} />
      </div>
    </div>
  );
}

export default Avatar;
