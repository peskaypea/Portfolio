import "./Menu.css";

function MainOne() {
  return (
    // <!-- MainOne -->
    <section id="one" className="tiles">
      <article>
        <span className="image">
          <img src="images/pic01.jpg" alt="" />
        </span>
        <header className="major">
          <h3>
            <a href="https://polar-sponge-wren.glitch.me/" className="link">
              MUSEUM OF SURF
            </a>
          </h3>
          <a href="https://polar-sponge-wren.glitch.me/" className="link">
            <p>A website for a surfing Museum, using HTML, CSS and Bootstrap</p>
          </a>
        </header>
      </article>
      <article>
        <span className="image">
          <img src="images/pic02.jpg" alt="" />
        </span>
        <header className="major">
          <h3>
            <a href="https://yelpcamp-9tb7.onrender.com" className="link">
              Yelpcamp
            </a>
          </h3>
          <a href="https://yelpcamp-9tb7.onrender.com" className="link">
            <p>
              Yelpcamp is a dynamic web application designed to help people find
              and review camping sites around the world. It is a full-stack web
              application built with HTML, CSS, JavaScript, Node.js, Express,
              and MongoDB.
              <br></br>
              <br></br>
              Ps.... Give me time to load
            </p>
          </a>
        </header>
      </article>
      <article>
        <span className="image">
          <img src="images/pic03.jpg" alt="" />
        </span>
        <header className="major">
          <h3>
            <a
              href="https://expensetracker-y966.onrender.com/"
              className="link"
            >
              React Expense Tracker
            </a>
          </h3>
          <a href="https://expensetracker-y966.onrender.com/" className="link">
            <p>
              This project is an expense tracker application built with React.
              It allows users to keep track of their expenses, categorize them
              and get a visual report of their expenses. Features Add, edit and
              delete expenses, Categorize expenses and Generate a report of
              expenses
            </p>
          </a>
        </header>
      </article>
      <article>
        <span className="image">
          <img src="images/pic04.jpg" alt="" />
        </span>
        <header className="major">
          <h3>
            <a
              href="https://opaque-magnificent-technosaurus.glitch.me/"
              className="link"
            >
              Toggle Reviews
            </a>
          </h3>
          <a
            href="https://opaque-magnificent-technosaurus.glitch.me/"
            className="link"
          >
            <p>
              A simple tool for displaying and hiding product reviews on an
              e-commerce website. User can toggle reviews on and off with a
              single click, Reviews are displayed in a clear and visually
              appealing format, Responsive design ensures a smooth user
              experience on all devices
            </p>
          </a>
        </header>
      </article>
    </section>
  );
}

export default MainOne;
