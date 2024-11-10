import Image from "next/image";
import "./page.css"; // Import your CSS file

function Home() {
  return (
    <div className="container">
      <Image
        src="/picture.png"
        alt="image"
        width={1300}
        height={700}
        className="main-image md-display"
      />
      <h1 className="main-heading md-display">
        𝗚𝗿𝗲𝗲𝘁𝗶𝗻𝗴𝘀 & 𝗧𝗵𝗮𝗻𝗸𝘆𝗼𝘂 𝗳𝗼𝗿 𝘃𝗶𝘀𝗶𝘁𝗶𝗻𝗴 𝗠𝘆 𝗣𝗼𝗿𝘁𝗳𝗼𝗹𝗶𝗼
      </h1>
      <Image
  src="/picture.png"
  alt="image"
  width={1200}
  height={800} // You can set a height value here based on your image aspect ratio
  className="main-image small-display"
  layout="responsive" // Ensures the image is responsive
/>


      <h1 className="main-heading small-display">
        𝗚𝗿𝗲𝗲𝘁𝗶𝗻𝗴𝘀 & 𝗧𝗵𝗮𝗻𝗸𝘆𝗼𝘂 𝗳𝗼𝗿 𝘃𝗶𝘀𝗶𝘁𝗶𝗻𝗴 𝗠𝘆 𝗣𝗼𝗿𝘁𝗳𝗼𝗹𝗶𝗼
      </h1>
      <div className="description">
        Hello and welcome! I’m Sehar, a developer and designer who loves
        creating digital experiences that look beautiful and are easy to use.
        Every project I take on is a chance to bring creativity and technology
        together, making ideas come to life in ways that connect and inspire.
        <br />
        <br />
        Take a look through my portfolio — a place where I showcase my
        dedication to thoughtful design, smart solutions, and storytelling
        through code. Let’s create something amazing together!
      </div>
    </div>
  );
}

export default Home;
