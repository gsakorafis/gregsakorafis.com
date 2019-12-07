import React from 'react';
import MainLayout from './MainLayout';
import './Pages.css';

function HomePage() {
  return (
    <MainLayout pageContent={<HomePageContent />} />
  );
}

function HomePageContent() {
  return (
    <block>
      <div className="HomePage">
        <h2><a href="#music">pianist</a>&nbsp;|&nbsp;<a href="#tech">engineer</a></h2>
      </div>
      <div className="HomePageBackground"></div>
    </block>
  );
}

function MusicPage() {
  return (
    <MainLayout pageContent={<MusicPageContent />} />
  );
}

function MusicPageContent() {
  return (
    <block>
      <div className="MusicPage">
        <h4>I’ve been performing classical music for twenty years.</h4>
        <p>At age ten, I began studying piano with Yevgenia Derian at the Oakland University Music Preparatory Division in my hometown of Rochester, Michigan. Within the Division, I gave quarterly recitals and received top marks in solo performance festivals, including the National Federation of Music Clubs. I also accompanied soloists and choral groups, and gave a concerto performance with the symphony orchestra at the International Academy in Bloomfield Hills, Michigan.</p>
        <p>In addition to my piano career, I studied clarinet with Dr. William King and performed with the Detroit Civic Orchestra, the Oakland Youth Orchestra, and the Michigan State Band &amp; Orchestra Association Honors Orchestra.</p>
        <p>As I began my engineering studies at age seventeen, I ceased formal music instruction but since have continued to practice and increase my piano repertoire, which today includes preludes, sonatas, études, and more.</p>
      </div>
      <div className="MusicPageBackground"></div>
    </block>
  );
}

function TechPage() {
  return (
    <MainLayout pageContent={<TechPageContent />} />
  );
}

function TechPageContent() {
  return (
    <block>
      <div className="TechPage">
        <h4>I build software.</h4>
        <p>Music and programming have a lot in common. Both start with an idea that is set down in instructions — either to a computer or an instrument — and transformed into something more. They both require creative and analytical thinking, and they both scale, whether in the concert of computation, storage, and networking, or that of a symphony orchestra.</p>
        <p>It’s therefore no surprise that I’ve been building engineering teams and products for over ten years in Seattle, Washington. Learn more about my credentials and experience on <a href="https://www.linkedin.com/in/gregsakorafis/">LinkedIn</a>.</p>
      </div>
      <div className="TechPageBackground"></div>
    </block>
  );
}

export { HomePage, MusicPage, TechPage };
