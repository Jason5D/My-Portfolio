import myface from "../content/myface.jpeg";
import mycat from "../content/mycat.jpeg";

export default function AboutMe() {
  return (
    <div class="section-dkblue">
      <section id="projects">
        <h2>Jason Donoghue</h2>
        <article>
          <div class="text">
            <h4>Just the Highlights</h4>
            <h3>Studyosaurus</h3>
            <p class="blackbox">
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
              <li>HTML</li>
              <li>CSS</li>
              <li>SVG</li>
            </ul>
          </div>
          <img
            src={myface}
            alt="My face"
          />
        </article>
        <article class="reverse">
          <div class="text">
            <h4>My about me</h4>
            <h3>My Cat</h3>
            <p class="blackbox">
              This beautiful cats name is Poppy. She lives with me and supports
              me through all the difficult points. Any time I'm stuck and few
              strokes and a belly rub and the answer just comes to me.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SVG</li>
            </ul>
          </div>
          <img
            src={mycat}
            alt="My cat"
          />
        </article>
      </section>
    </div>
  );
}
