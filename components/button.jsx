import '../static/styles.scss';

const Button = (props) => {
  return (
    <div className="beer-button">
      <div className="beer-info-title">{props.text}</div>
    </div>
  );
};

export default Button;
