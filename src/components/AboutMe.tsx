import avatar from "../assets/bb.jpg";
import arrow from "../assets/arrow.png";
import { Button } from "./ui/button";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AboutMe = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Click handler to go back
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center relative">
      {/* Avatar Wrapper */}
      <div className="absolute top-4 right-4 w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden">
        <img
          src={avatar}
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-4 left-4 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden">
        <Button className="bg-transparent w-full h-full flex items-center justify-center hover:bg-black" onClick={handleBackClick}>
          <img 
            src={arrow}
            alt="arrow"
            className="w-6 h-6 sm:w-8 sm:h-8 object-cover transform rotate-90" // Adjust size if needed
          />
        </Button>
      </div>
      {/* Main Content */}
      <section className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          About Me
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          I am Bharat Bhushan, a dedicated and passionate web developer with a
          Bachelor of Engineering degree in Computer Science and Engineering
          from HKBK College of Engineering, Bengaluru, India. My journey in the
          tech world has been driven by a relentless pursuit of knowledge and a
          keen interest in creating innovative web solutions. My goal is to
          transition into a software developer role where I can leverage my web
          development skills and expand my expertise in software development. I
          am eager to work on challenging projects that push the boundaries of
          technology and contribute to meaningful innovations. When I'm not
          coding, I enjoy exploring new technologies, reading about advancements
          in the tech industry, and participating in hackathons and coding
          competitions. My all-time best achievement is securing an AIR 4195
          rank in JEE Advanced 2020, demonstrating my strong academic background
          and competitive spirit.
        </p>
        <br />

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, fuga optio autem ipsam voluptas debitis error hic quaerat rem aliquam, cumque labore, consectetur temporibus id corporis quibusdam eos facere ullam consequatur repellat natus! Quisquam deleniti dolore eos asperiores accusamus, vitae impedit, nisi nihil labore rerum, minima adipisci non! Voluptas nostrum nisi ut beatae minima quod quisquam ex magni, atque inventore alias eos debitis ipsam tempore soluta dolorem error sit suscipit enim aliquam sint. Quis vel provident deserunt dolorem tenetur omnis labore atque facilis quae minima. Accusamus delectus numquam non fugit sapiente? Voluptatem necessitatibus voluptate labore praesentium veniam nemo deleniti, odio facilis ipsa veritatis, tempora assumenda enim explicabo? Esse quam pariatur accusantium perspiciatis illum adipisci. Velit enim repellat quos! Dolor aut hic soluta enim, culpa quis consectetur sapiente labore eveniet quae quam pariatur. Illo laborum corrupti ipsa suscipit doloribus accusamus ullam possimus fuga modi porro nemo aspernatur facilis sint, commodi voluptates magni officia enim. Voluptatum asperiores dignissimos minus assumenda, similique quaerat ipsam nulla? Incidunt voluptas accusantium vitae sapiente nostrum quos? Alias ratione ipsum, exercitationem veniam sapiente expedita temporibus consectetur aperiam tempora ad dolores asperiores harum optio nulla iure blanditiis eveniet vitae. Mollitia architecto est quae deserunt recusandae voluptas, animi, ducimus ad ut quaerat officia alias harum ab necessitatibus accusamus sapiente veniam non? Veritatis error iusto consectetur ratione voluptatibus, ea maxime deserunt dolor fugit harum nisi nostrum magni saepe, aspernatur delectus? Voluptatibus reprehenderit animi placeat adipisci. Autem asperiores dolorum odit ex eum repellat quaerat facere ipsa? Blanditiis alias asperiores laboriosam, fugiat veritatis harum, quos reiciendis eius molestiae adipisci, praesentium dolorem perferendis. Rem 
        </p>
      </section>
    </div>
  );
};

export default AboutMe;
