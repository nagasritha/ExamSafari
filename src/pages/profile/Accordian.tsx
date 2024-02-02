import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/pages/ui/accordion"
import './Profile.css'

function Accordian() {
  return (
    <>
      <div id="#contact-section" className='services-container'>
        {/* <div className='service-heading mt-36' style={{textAlign:"center"}}> Frequently Asked Questions</div>
        <div className='service-para mb-36' style={{textAlign:"center"}}> we are here to help you </div> */}
        <div className="faq-section">
        <div className='faq-part'>
               <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg md:text-2xl">Ratings Given</AccordionTrigger>
                    <AccordionContent className="text-base text-xl">
                     No Ratings given yet!
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className=" mt-2 md:mt-4 ">
                    <AccordionTrigger className="text-lg md:text-2xl">Notification, Emails, SMS</AccordionTrigger>
                    <AccordionContent className="text-base text-xl">
                     Dummpy text
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className=" mt-2 md:mt-4 ">
                    <AccordionTrigger className="text-lg md:text-2xl">Password Change</AccordionTrigger>
                    <AccordionContent className="text-base text-xl">
                     Dummy Text
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg md:text-2xl">Postal Address</AccordionTrigger>
                    <AccordionContent className="text-base text-xl">
                    Dummy Text- user can add his address prior itself
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg md:text-2xl">Bank Details</AccordionTrigger>
                    <AccordionContent className="text-base text-xl">
                    Dummy Text
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-lg md:text-2xl">Available Funds</AccordionTrigger>
                    <AccordionContent className="text-base text-xl">
                    Dummy Text
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger className="text-lg md:text-2xl">Payment Methods</AccordionTrigger>
                    <AccordionContent className="text-base text-xl">
                    Dummy Text
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-8">
                    <AccordionTrigger className="text-lg md:text-2xl">Payment & Refunds</AccordionTrigger>
                    <AccordionContent className="text-base text-xl">
                    Dummy Text
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-9">
                    <AccordionTrigger className="text-lg md:text-2xl">Data Protection</AccordionTrigger>
                    <AccordionContent className="text-base text-xl">
                    Dummy Text
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

          </div>

        </div>
        



      </div>

  
    </>
  )
}

export default Accordian