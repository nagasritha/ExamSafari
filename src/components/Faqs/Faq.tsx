import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import './index.css'

function Faq() {
  return (
    <>
      <div id="#contact-section" className='services-container'>
        <div className='service-heading mt-36' style={{textAlign:"center"}}> Frequently Asked Questions</div>
        <div className='service-para mb-36' style={{textAlign:"center"}}> we are here to help you </div>
        <div className="faq-section">
        <div className='faq-part'>
               <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg md:text-3xl">Is it accessible?</AccordionTrigger>
                    <AccordionContent className="text-base text-2xl">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className=" mt-2 md:mt-4 ">
                    <AccordionTrigger className="text-lg md:text-3xl">Is it styled?</AccordionTrigger>
                    <AccordionContent className="text-base text-2xl">
                      Yes. It comes with default styles that matches the other
                      components&apos; aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className=" mt-2 md:mt-4 ">
                    <AccordionTrigger className="text-lg md:text-3xl">Is it animated?</AccordionTrigger>
                    <AccordionContent className="text-base text-2xl">
                      Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

          </div>
          <div className='faq-part'>
               <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg md:text-3xl">Is it accessible?</AccordionTrigger>
                    <AccordionContent className="text-base text-2xl">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className=" mt-2 md:mt-4 ">
                    <AccordionTrigger className="text-lg md:text-3xl">Is it styled?</AccordionTrigger>
                    <AccordionContent className="text-base text-2xl">
                      Yes. It comes with default styles that matches the other
                      components&apos; aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className=" mt-2 md:mt-4 ">
                    <AccordionTrigger className="text-lg md:text-3xl">Is it animated?</AccordionTrigger>
                    <AccordionContent className="text-base text-2xl">
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