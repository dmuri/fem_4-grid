import Image from 'next/image'
import Card from "@/components/Card";

export default function Home() {
  return (
      <>
        <div className=" flex mx-auto max-w-sm md:max-w-none md:px-4 justify-center items-center">
          <div className="h-[900px]  flex flex-col gap-7">
            <h1 className="text-3xl md:text-4xl font-thin text-center max-w-[25ch] mx-auto leading-snug mt-6">Reliable, efficient delivery <span className="text-semibold">Powered by Technology</span></h1>
            <p className="text-center text-grayish-blue mx-auto text-lg max-w-[56ch]">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project
              is successful</p>
            <div className="grid gap-6  md:grid-cols-[1fr_1fr_1fr] md:mt-10 mx-auto">
              <Card title="Supervisor" content="Monitors activity to identify project roadblocks" className="md:row-span-2 self-center border-cyan" imageUrl="/images/icon-supervisor.svg" />
              <Card title="Team Builder" content="Scans our talent network to create the optimal team for your project" className="border-red" imageUrl="/images/icon-team-builder.svg"/>
              <Card title="Karma" content="Regularly evaluates our talent to ensure quality" className="md:col-start-2 border-orange" imageUrl="/images/icon-karma.svg"/>
              <Card title="Calculator" content="Uses data from past projects to provide better delivery estimates" className="md:row-start-1 md:col-start-3 md:row-span-2 md:self-center border-blue" imageUrl="/images/icon-calculator.svg"/>
            </div>
          </div>
        </div>
      </>
  )
}
