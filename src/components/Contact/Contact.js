import React from "react";
import { Button, Heading, TextWrapper } from "../../globalStyles";
import { IconContext } from "react-icons/lib";
import {
  ContactSection,
  ContactWrapper,
  ContactContainer,
  ContactCardInfo,
  ContactCardPlan,
  ContactCardCost,
  ContactCardFeatures,
  ContactCardText,
  ContactCardFeature,
  ContactCard,
} from "./ContactStyles";
import { contactData } from "../../data/ContactData";

function Contact() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: "1rem" }}>
      <ContactSection id="Contact">
        <ContactWrapper>
          <Heading>Contactez-nous</Heading>

          <TextWrapper
            mb="1.4rem"
            weight="600"
            size="1.1rem"
            color="white"
            align="center"
          ></TextWrapper>
          <ContactContainer>
            {contactData.map((card, index) => (
              <ContactCard key={index}>
                <ContactCardInfo>
                  <ContactCardPlan>{card.title}</ContactCardPlan>
                  <ContactCardCost>{card.price}</ContactCardCost>
                  <ContactCardText>{card.description}</ContactCardText>
                  <div>
                    <input
                      type="text"
                      placeholder="Nom"
                      value={card.name}
                      onChange={(e) => {
                        const updatedData = [...contactData];
                        updatedData[index].name = e.target.value;
                        // Update state or data source if needed
                      }}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Courriel"
                      value={card.email}
                      onChange={(e) => {
                        const updatedData = [...contactData];
                        updatedData[index].email = e.target.value;
                        // Update state or data source if needed
                      }}
                    />
                  </div>
                  <textarea
                    type="text"
                    placeholder="Écrivez un message..."
                    value={card.message}
                    onChange={(e) => {
                      const updatedData = [...contactData];
                      updatedData[index].message = e.target.value;
                    }}
                  />
                  <ContactCardFeatures>
                    {card.features.map((feature, index) => (
                      <ContactCardFeature key={index}>
                        {feature}
                      </ContactCardFeature>
                    ))}
                  </ContactCardFeatures>
                  <Button>Envoyez</Button>
                </ContactCardInfo>
              </ContactCard>
            ))}
          </ContactContainer>
        </ContactWrapper>
      </ContactSection>
    </IconContext.Provider>
  );
}
export default Contact;
