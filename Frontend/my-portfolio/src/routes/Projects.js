import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="section-dkblue">
      <section id="projects">
        <h2>Projects I'm proud of</h2>
        <article>
          <div className="text">
            <h4>Latest Project</h4>
            <h3>Studyosaurus</h3>
            <p className="blackbox">
              Description of the project. This should be faily concise while
              also describing the key components that you developed or worked
              on. It can be as long as you need it to be but should at least be
              a few sentences long. Be sure to include specific links anywhere
              on the description. A link looks like
              <a href="https://studyosaurus.netlify.app/">this</a>.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SVG</li>
            </ul>
          </div>
          <img
            src="https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Man on a beach"
          />
        </article>
        <article className="reverse">
          <div className="text">
            <h4>Latest Project</h4>
            <h3>Studyosaurus</h3>
            <p className="blackbox">
              Description of the project. This should be faily concise while
              also describing the key components that you developed or worked
              on. It can be as long as you need it to be but should at least be
              a few sentences long. Be sure to include specific links anywhere
              on the description. A link looks like
              <a href="https://studyosaurus.netlify.app/">this</a>.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SVG</li>
            </ul>
          </div>
          <img
            src="https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Man on a beach"
          />
        </article>
      </section>
    </div>
  );
}

export default Projects;