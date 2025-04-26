import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/icons/icon.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";
import Link from "next/link";

const testimonials = [
  {
    name: "CleverBooks.ai",
    position: "Tool for demand forecasting, inventory planning.",
    text: "CleverBooks is an AI-powered supply chain software that provides companies tools for demand forecastin inventory planning and more.This helps them have the right amount of stock, optimise space and fulfil every order.",
    avatar: memojiAvatar1,
    link: "https://isha-gupta01.github.io/CleverBooks.ai/",
  },
  {
    name: "BitLinks",
    position: "URL Shortener",
    text: "A URL shortener is a tool that converts a long URL into a shorter, more manageable link while still directing users to the original destination. URL shorteners work by generating a unique key or code that is mapped to the original long URL and storing this mapping in a database. ",
    avatar: memojiAvatar2,
    link: "https://bit-links-beryl.vercel.app/",
  },
  {
    name: "Vistora",
    position: "E-Commerce Website",
    text: "Vistora is your modern marketplace where trends meet convenience. From timeless classics to tomorrow’s essentials, Vistora offers a curated shopping experience that's as dynamic as your lifestyle. Dive into a world where innovation, style, and unbeatable deals come together — making every click a new discovery.",
    avatar: memojiAvatar3,
    link: "https://e-comm-frontend-sandy.vercel.app/",
  },
  {
    name: "Drumkit",
    position: "Unleash the Beat – Play Anytime!",
    text: "Drumkit project using JavaScript, allowing users to play sounds by clicking specific keys or buttons. Implemented event listeners to detect key presses and trigger corresponding drum sounds in real-time.",
    avatar: memojiAvatar5,
    link: "https://isha-gupta01.github.io/DrumKit-01/",
  },
  {
    name: "CleverBooks.ai",
    position: "Tool for demand forecasting, inventory planning.",
    text: "CleverBooks is an AI-powered supply chain software that provides companies tools for demand forecastin inventory planning and more.This helps them have the right amount of stock, optimise space and fulfil every order.",
    avatar: memojiAvatar1,
    link: "https://isha-gupta01.github.io/CleverBooks.ai/",
  },
  {
    name: "BitLinks",
    position: "URL Shortener",
    text: "A URL shortener is a tool that converts a long URL into a shorter, more manageable link while still directing users to the original destination. URL shorteners work by generating a unique key or code that is mapped to the original long URL and storing this mapping in a database. ",
    avatar: memojiAvatar2,
    link: "https://bit-links-beryl.vercel.app/",
  },
  {
    name: "Vistora",
    position: "E-Commerce Website",
    text: "Vistora is your modern marketplace where trends meet convenience. From timeless classics to tomorrow’s essentials, Vistora offers a curated shopping experience that's as dynamic as your lifestyle. Dive into a world where innovation, style, and unbeatable deals come together — making every click a new discovery.",
    avatar: memojiAvatar3,
    link: "https://e-comm-frontend-sandy.vercel.app/",
  },
  {
    name: "Drumkit",
    position: "Unleash the Beat – Play Anytime!",
    text: "Drumkit project using JavaScript, allowing users to play sounds by clicking specific keys or buttons. Implemented event listeners to detect key presses and trigger corresponding drum sounds in real-time.",
    avatar: memojiAvatar5,
    link: "https://isha-gupta01.github.io/DrumKit-01/",
  },



];

export const TestimonialsSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeader title="Beyond Basics" eyebrow="Happy Projects" description="Don't just take my word for it. See what my projects have to say about my work." />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:20s] 
          hover:[animation-play-state:paused]">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-10 max-w-xs md:p-8 md:max-w-md hover:-rotate-3  transition duration-300">
                <div className="flex gap-4 items-center ">
                  <Link target="blank" href={testimonial.link} className=" size-14 bg-gray-700 inline-flex rounded-full flex-shrink-0 items-center justify-center shadow-[0_0_10px_3px_#6ee7b7] transition-all duration-300 animate-glow">
                    <Image src={testimonial.avatar} alt="icons" width={80} height={80} className="rounded-full p-2" />
                  </Link>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">{testimonial.position}</div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};
