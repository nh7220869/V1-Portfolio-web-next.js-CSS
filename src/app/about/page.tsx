"use client"; // Ensure that you have the client component setup correctly
import './about.css'; // Import the CSS file
import "../compnents/animations.css"
import '../globals.css';




export default function About() {
    return (
        <div className='mainclass'>
            {/* About Me Section */}
            <div className="about-me">
                <h1 className="about-title">About Me</h1>
                <p className="about-description">
                    I am Noor ul Sehar, a dedicated educator currently pursuing a Bachelor's degree in Education from Federal Urdu University. With a passion for teaching and a commitment to continuous learning, I aim to inspire students to reach their full potential.
                </p><br />
                <p className="about-description">
                    My teaching experience includes working as a Prep Class Teacher at Allied School and providing tutoring services in various subjects. I believe in fostering a supportive and engaging learning environment.
                </p><br />
                <p className="about-description">
                    In addition to education, I am enthusiastic about exploring new technologies and their applications in the learning process.
                </p>
            </div>

            {/* Skills Section */}
            <div className="skills-section">
                <h2 className="skills-title">Skills</h2>
                <div className="skills-list">
                    <SkillBar title="Communication" percentage="85" />
                    <SkillBar title="Teaching" percentage="90" />
                    <SkillBar title="Basic Computer Knowledge" percentage="75" />
                    <SkillBar title="Voice Quality" percentage="80" />
                    <SkillBar title="HTML" percentage="70" />
                    <SkillBar title="CSS" percentage="65" />
                    <SkillBar title="TypeScript" percentage="60" />
                    <SkillBar title="Next.js" percentage="70" />
                </div>
                <div className="cv-section">
                    <h3 className="cv-message">If you want to Hire me, explore my resume as well</h3>
                    <a 
                        href="https://resume-six-rose.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cv-link"
                    >
                       View my Resume
                    </a>
                </div>
            </div>
        </div>
    );
}

// SkillBar function
function SkillBar({ title, percentage }: { title: string; percentage: string }) {
    return (
        <div className="skill-bar">
            <div className="skill-title">{title}</div>
            <div className="skill-progress">
                <div className="skill-percentage" style={{ width: `${percentage}%` }}>
                    {percentage}%
                </div>
            </div>
        </div>
    );
}
