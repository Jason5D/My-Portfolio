import "../styles/Projects.css";
import Studyosaurus from "../content/Studyosaurus.jpeg";
import Wisewalletkitchen from "../content/Wisewalletkitchen.jpeg";
import Whowantstobeamillionaire from "../content/Whowantstobeamillionaire.jpeg"

const Projects = () => {
  return (
    <div className="section-dkblue">
      <section id="projects">
        <h2>What I've been working on</h2>
        <article>
          <div className="text">
            <a
              href="https://studyosaurus.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Studyosaurus</h3>
            </a>
            <p className="blackbox">
              This project was developed to solve the problem of keeping
              together lots of information, from different sources. It also
              helps become a lesson planned for when learn ing through a course
              by keeping a record of which week you learn the material.
            </p>
            <h4>Technology:</h4>
            <ul>
              <li>React</li>
              <li>Vite</li>
            </ul>
          </div>
          <img src={Studyosaurus} alt="Man on a beach" />
        </article>
        <article className="reverse">
          <div className="text">
            <a href="https://wisewalletkitchen.netlify.app/"
            target="_blank"
            rel="noreferrer"
            >
              <h3>Wise Wallet Kitchen</h3>
            </a>
            <p className="blackbox">
              This project was the final completiong of the School of Code
              bootcamp, working with 4 other people. This was aimed around
              helping people budget for themseles and their familys. It gave the
              choice for poeple to choise family size, budget plan and offered a
              choice of recipes for each day with a graphical interface of
              savings.
            </p>
            <h4>Technology:</h4>
            <ul>
              <li>React</li>
              <li>Supabase</li>
            </ul>
          </div>
          <img src={Wisewalletkitchen} alt="Man on a beach" />
        </article>
        <article>
          <div className="text">
            <a
              href="https://github.com/Jason5D/Who_Wants_To_Be_A_Millionaire_Terminal_Game"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Who Wants to Be a Millionaire</h3>
            </a>
            <p className="blackbox">
              This projects uses a common API which generates a total of 20 random questions, and can be played in the terminal or command line. Each round you win money and if you answer all 20 questions correctly, then you win £1 millon. I have made sure to make each question be randomly generated so that, it's very difficult to win. See if you can do it!
            </p>
            <h4>Technology:</h4>
            <ul>
              <li>Python</li>
              <li>Flask</li>
            </ul>
          </div>
          <img src={Whowantstobeamillionaire} alt="Man on a beach" />
        </article>
      </section>
    </div>
  );
};

export default Projects;
