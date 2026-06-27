import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hey there! 👋
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          My name is Dmitrii (but you can call me Dima for short), and I am a Data Scientist 
          specializing in marketing measurement and causal inference.
        </p>
        <p>
          My experience ranges from causal inference and Bayesian modeling to agentic pipelines and NLP, 
          with end-to-end ownership from analytics to deployment and observability pipelines.
          Previously built RAG and agentic systems in finance and HR, and spent five years doing computational research at Karolinska Institute.
          Have a look at my {" "} 
          <a
            href="/cv"
          >
          CV
          </a>{" "}
         for more details.
        </p>
        <p>
          Outside of my professional work, I am a big fan of hackathons and open-source projects.
          Check out my {" "}
          <a href={socialLinks.github} target="_blank">
            GitHub
          </a>{" "}
          and {" "}
          <a
            href="/projects"
          >
          Projects
          </
          a>{" "}
          
          to see some of my contributions.
        </p>
        <p>
          In my free time, I enjoy learning new languages and ultra-distance cycling.
        </p>
        <p>
          Thank you for visiting my website! Feel free to reach out to me via{" "}
          <a href={socialLinks.linkedin} target="_blank">
            LinkedIn
          </a>{" "}
          or{" "}
          <a href={socialLinks.email} target="_blank">
            email
          </a>{" "}
          if you have any questions or just want to chat
          about ML, software engineering, or anything else
          that comes to mind
          😊
          .
        </p>
      </div>
    </section>
  );
}
