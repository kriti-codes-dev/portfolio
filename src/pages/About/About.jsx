import personal_pic from "@/assets/images/personal_pic.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={personal_pic}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hi, I’m Kriti Gupta — a frontend developer with a strong focus
                on building fast, scalable, and accessible web applications. I
                specialize in modern technologies like JavaScript (ES6+), React,
                Redux, and SCSS, and I’m passionate about crafting clean,
                user-centric interfaces that are both functional and visually
                intuitive.
              </p>
              <p className="text-white">
                Performance and accessibility are at the core of my development
                philosophy. I leverage best practices such as lazy loading, code
                splitting, and Progressive Web App enhancements to deliver
                seamless, high-performing experiences. I’m equally committed to
                writing semantic HTML and following inclusive design principles
                to ensure usability for all users.
              </p>
              <p className="text-white">
                Beyond hands-on coding, I enjoy contributing to the overall
                quality and efficiency of the development process—whether it’s
                through building reusable component libraries, integrating
                product analytics, or mentoring junior developers. I’m always
                exploring new ideas, tools, and approaches to push the
                boundaries of what’s possible on the web.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
