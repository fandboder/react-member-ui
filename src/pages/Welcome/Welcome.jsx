import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="creator">
      <div className="c-heading">
        <div className="c-heading__top">
          <h2 className="text-default">Site of the Day - Jun 17, 2024</h2>
        </div>
        <div className="c-heading__middle">
          <h1 className="heading-1">
            <a
              href="home"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redis <span className="text-orange-500">Agency</span>
            </a>
          </h1>
        </div>
        <div className="c-heading__bottom text-lg">
          as well know and we are very busy all days advice you. Advice you to
          call us of before arriving
        </div>
      </div>
      <div className="center-button">
        <a
          href="home"
          className="button-container rounded-lg border-2 border-solid border-orange-600"
        >
          ORDER NOW!
        </a>
      </div>
    </div>
  );
};

export default Welcome;
