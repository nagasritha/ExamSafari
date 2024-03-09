import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import './index.css'
import { useEffect, useState } from "react";




function Faq() {

  const [data, setData] = useState({
    homeData: {
       
      faqHeading: "",
      faqDescription: "",
    }
  });
  
  useEffect(() => {
    fetch("https://example-na5m.onrender.com/home/home")
      .then((result) => result.json())
      .then((resp) => {
        // console.log("result", resp);
        setData(resp);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <div id="#contact-section" className='services-container'>
        <div className='service-heading mt-36' style={{textAlign:"center"}}>{data.homeData.faqHeading ? data.homeData.faqHeading : "Frequently Asked Questions"}</div>
        <div className='service-para mb-16' style={{textAlign:"center"}}> {data.homeData.faqDescription ? data.homeData.faqDescription : "we are here to help you" } </div>
        <div className="faq-section pl-5">
        <div className='faq-part p-4'>
               <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="mt-2 md:mt-4 ">
                    <AccordionTrigger className="text-lg md:text-3xl">Is it accessible?</AccordionTrigger>
                    <AccordionContent className=" text-2xl">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="mt-2 md:mt-4 ">
                    <AccordionTrigger className="text-lg md:text-3xl">Is it styled?</AccordionTrigger>
                    <AccordionContent className=" text-2xl">
                      Yes. It comes with default styles that matches the other
                      components&apos; aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="mt-2 md:mt-4 ">
                    <AccordionTrigger className="text-lg md:text-3xl">Is it animated?</AccordionTrigger>
                    <AccordionContent className=" text-2xl">
                      Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

          </div>
          <div className='faq-part p-4'>
               <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="mt-2 md:mt-4 ">
                    <AccordionTrigger className="text-lg md:text-3xl">Is it accessible?</AccordionTrigger>
                    <AccordionContent className=" text-2xl">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="mt-2 md:mt-4 ">
                    <AccordionTrigger className="text-lg md:text-3xl">Is it styled?</AccordionTrigger>
                    <AccordionContent className=" text-2xl">
                      Yes. It comes with default styles that matches the other
                      components&apos; aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="mt-2 md:mt-4 ">
                    <AccordionTrigger className="text-lg md:text-3xl">Is it animated?</AccordionTrigger>
                    <AccordionContent className=" text-2xl">
                      Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

          </div>

        </div>
        



      </div>

  
    </>
  )
}

export default Faq