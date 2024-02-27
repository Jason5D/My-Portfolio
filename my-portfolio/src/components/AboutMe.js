import "../styles/AboutMe.css"
import myface from "../content/myface.jpeg";
import mycat from "../content/mycat.jpeg";

const AboutMe = () => {
  return (
    <div className="section-dkblue">
      <section id="about">
        <h2>Jason Donoghue</h2>
        <article>
          <div className="text">
            <h4>Just the Highlights</h4>

            <p className="blackbox">
              Proficient junior software engineer with experience of designing
              developing and implementing software applications. Utilising
              Javascript and Python to write wes With a strong background in
              technical sales roles, and supplying lighting technology to the
              construction industry, I’ve witnessed the transformative power of
              technology first-hand. My true passion lies in coding, which led
              me to enrol in the School of Code’s intensive bootcamp. There, I
              honed my problem-solving skills and discovered how learning to
              code can drive innovation. I have agreed to support pre-enrolment
              on the course, and I also attend tech meetups to meet likeminded
              friends. In my spare time I have been learning new languages,
              getting to grips with data structures and algorithms, and have
              several personal projects I’m working on.
            </p>
            <h4>My favourite technologies include:</h4>
            <ul>
              <li>JavaSript</li>
              <li>CSS</li>
              <li>Python</li>
            </ul>
          </div>
          <img src={myface} alt="My face" />
        </article>
        <article className="reverse">
          <div className="text">
            <h4>My about me</h4>
            <p class="blackbox">
              I've very happily lived in Brighton for 8 years now after moving
              down from Birmingham. After spending a couple of years travelling
              I wanted the life by the sea and all the great benefits this comes
              with. I enjoy paddleboarding and volleyball in the summer months,
              then enjoy nice pubs and some competitive chess in the winter.
              Like to fancy myself as a bit of a home DJ and enjoy going for
              long hikes with friends. I get to share my space with the queen of
              the house Poppy, who likes nothing more than a sunbathe and belly
              rub.
            </p>
            <h4>Poppy's favourite things include:</h4>
            <ul>
              <li>Mice</li>
              <li>Sun</li>
              <li>Attention</li>
            </ul>
          </div>
          <img src={mycat} alt="My cat" />
        </article>
      </section>
    </div>
  );
};

export default AboutMe;
