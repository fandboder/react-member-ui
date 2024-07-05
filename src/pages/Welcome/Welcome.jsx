import "./Welcome.css";
import NavBar from "../../components/ui/navbar";

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
              href="/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redis{" "}
              <mark className="rounded-md bg-white-100 text-orange-500 hover:bg-orange-500 hover:text-yellow-50">
                Agency
              </mark>
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
          href="#"
          className="button-container rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white-100"
        >
          ORDER NOW!
        </a>
      </div>
      <NavBar />
    </div>
  );
};

export default Welcome;
