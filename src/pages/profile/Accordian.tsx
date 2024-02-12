import { Grid, AccordionDetails, Typography } from "@mui/material";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,

} from "@/pages/ui/accordion";
import './Profile.css';
import { Link } from "react-router-dom";
import { FaHotel, FaLock, FaPaypal, FaRupeeSign, FaSms, FaStar } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

function AccordionWithGrid() {
  return (
    <div id="#contact-section" className="services-container">
      <div className="faq-section">
        <div className="faq-part">
          <Grid container spacing={{ xs: 5, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>

            <Grid item xs={5} sm={5} md={5} sx={{ marginLeft: "50px" }}>
              <Link to='/rating'>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-0">
                    <div className="accordion-item">
                      <AccordionTrigger className="text-lg md:text-2xl" style={{ marginRight: "200px" }}><FaStar />Ratings Given</AccordionTrigger>
                      <AccordionDetails className="text-lg md:text-xl">
                        <Typography sx={{ fontSize: "1rem", }}>
                          This feature allows you to receive important notifications related to your favorite destination plans.
                        </Typography>
                      </AccordionDetails>
                    </div>
                  </AccordionItem>
                </Accordion>
              </Link>
            </Grid>


            <Grid item xs={5} sm={5} md={5} sx={{ marginLeft: "50px" }}>
              <Link to='/sms'>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-0">
                    <div className="accordion-item">
                      <AccordionTrigger className="text-lg md:text-2xl" style={{ marginRight: "80px" }}><FaSms />Notification, Emails, SMS</AccordionTrigger>
                      <AccordionDetails className="text-lg md:text-xl">
                        <Typography sx={{ fontSize: "1rem", }}>
                          Interact with the notifications by clicking on them to view more details or take necessary actions.
                        </Typography>
                      </AccordionDetails>
                    </div>
                  </AccordionItem>
                </Accordion>
              </Link>
            </Grid>


            <Grid item xs={5} sm={5} md={5} sx={{ marginLeft: "50px" }}>
              <Link to='/passwordchange'>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-0">
                    <div className="accordion-item">
                      <AccordionTrigger className="text-lg md:text-2xl" style={{ marginRight: "150px" }}><FaLock />Password Change</AccordionTrigger>
                      <AccordionDetails className="text-lg md:text-xl">
                        <Typography sx={{ fontSize: "1rem", }}>
                          To change your password, navigate to the "Password Change" section and follow the instructions provided.
                        </Typography>
                      </AccordionDetails>
                    </div>
                  </AccordionItem>
                </Accordion>
              </Link>
            </Grid>



            <Grid item xs={5} sm={5} md={5} sx={{ marginLeft: "50px" }}>
              <Link to='/address'>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-0">
                    <div className="accordion-item">
                      <AccordionTrigger className="text-lg md:text-2xl" style={{ marginRight: "180px" }}><FaMapLocation />Postal Address</AccordionTrigger>
                      <AccordionDetails className="text-lg md:text-xl">
                        <Typography sx={{ fontSize: "1rem", }}>
                          To manage your postal address, navigate to the "Postal Address" section and update your details as needed.
                        </Typography>
                      </AccordionDetails>
                    </div>
                  </AccordionItem>
                </Accordion>
              </Link>
            </Grid>


            <Grid item xs={5} sm={5} md={5} sx={{ marginLeft: "50px" }}>
              <Link to='/bankdetails'>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-0">
                    <div className="accordion-item">
                      <AccordionTrigger className="text-lg md:text-2xl" style={{ marginRight: "200px" }}><FaHotel />Bank Details</AccordionTrigger>
                      <AccordionDetails className="text-lg md:text-xl">
                        <Typography sx={{ fontSize: "1rem", }}>
                          To manage your bank details, navigate to the "Bank Details" section and update your information as needed.
                        </Typography>
                      </AccordionDetails>
                    </div>
                  </AccordionItem>
                </Accordion>
              </Link>
            </Grid>


            <Grid item xs={5} sm={5} md={5} sx={{ marginLeft: "50px" }}>
              <Link to='/funds'>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-0">
                    <div className="accordion-item">
                      <AccordionTrigger className="text-lg md:text-2xl" style={{ marginRight: "180px" }}><FaRupeeSign />Available Funds</AccordionTrigger>
                      <AccordionDetails className="text-lg md:text-xl">
                        <Typography sx={{ fontSize: "1rem", }}>
                          To view and manage your available funds, navigate to the "Available Funds" section for detailed information
                        </Typography>
                      </AccordionDetails>
                    </div>
                  </AccordionItem>
                </Accordion>
              </Link>
            </Grid>


            <Grid item xs={5} sm={5} md={5} sx={{ marginLeft: "50px" }}>
              <Link to='/payments'>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-0">
                    <div className="accordion-item">
                      <AccordionTrigger className="text-lg md:text-2xl" style={{ marginRight: "150px" }}><FaPaypal />Payment Methods</AccordionTrigger>
                      <AccordionDetails className="text-lg md:text-xl">
                        <Typography sx={{ fontSize: "1rem", }}>
                          To manage your payment methods, navigate to the "Payment Methods" section and add, remove, or update your information.
                        </Typography>
                      </AccordionDetails>
                    </div>
                  </AccordionItem>
                </Accordion>
              </Link>
            </Grid>

            <Grid item xs={5} sm={5} md={5} sx={{ marginLeft: "50px" }}>
              <Link to='/protection'>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-0">
                    <div className="accordion-item">
                      <AccordionTrigger className="text-lg md:text-2xl" style={{ marginRight: "180px" }}><FaLock />Data Protection</AccordionTrigger>
                      <AccordionDetails className="text-lg md:text-xl">
                        <Typography sx={{ fontSize: "1rem", }}>
                          To ensure data protection, we implement robust security measures and comply with relevant regulations.
                        </Typography>
                      </AccordionDetails>
                    </div>
                  </AccordionItem>
                </Accordion>
              </Link>
            </Grid>

          </Grid>
        </div>
      </div>
    </div>
  );
}

export default AccordionWithGrid;
