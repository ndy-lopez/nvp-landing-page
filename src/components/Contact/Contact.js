import React, { useState } from "react";
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormMessageInput,
  FormMessage,
  FormButton,
  FormTitle,
} from "./ContactStyles";
import { Container } from "../../globalStyles";
import validateForm from "./validateForm";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // New state for the message
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({ name, email, message }); // Validate the message field as well

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setName("");
    setEmail("");
    setMessage(""); // Clear the message field
    setError(null);
    setSuccess("Message was submitted!");
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: "Nom",
      value: name,
      onChange: (e) => setName(e.target.value),
      type: "text",
    },
    {
      label: "Courriel",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
    },
    {
      label: "Message",
      value: message,
      onChange: (e) => setMessage(e.target.value),
      type: "text",
    },
  ];

  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Contactez Nous.</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  {el.label === "Message" ? ( // Check if it's the Message field
                    <FormMessageInput // Use the FormMessageInput for the Message field
                      placeholder={`Entrez votre ${el.label.toLocaleLowerCase()}`}
                      value={el.value}
                      onChange={el.onChange}
                    />
                  ) : (
                    <FormInput // Use the regular FormInput for Name and Email
                      type={el.type}
                      placeholder={`Entrez votre ${el.label.toLocaleLowerCase()}`}
                      value={el.value}
                      onChange={el.onChange}
                    />
                  )}
                </FormInputRow>
              ))}

              <FormButton type="submit">Envoyer</FormButton>
            </FormWrapper>
            {error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default Form;
