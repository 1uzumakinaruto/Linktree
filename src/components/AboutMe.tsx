

const AboutMe = () => {
  return (
    <div className=" text-white min-h-screen flex flex-col justify-center">
      {/* Adjusted to shift the section upwards */}
      <section className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 text-center h-full -mt-12">
        {/* Added negative margin-top */}
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
      </section>
    </div>
  );
};

export default AboutMe;
