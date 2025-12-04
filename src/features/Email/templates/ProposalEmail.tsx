import * as React from 'react';


import {
    Html,
    Head,
    Body,
    Preview,
    Container,
    Section,
    Img,
    Row,
    Text,
    Hr,
  } from "@react-email/components";

  interface Props  {
    authorName : string,
    authorOrganization : string,
    message: string,
    howHeard: string,
    phoneNumber : string
  }

  const styles = {
    body: {
      backgroundColor: "#ffffff",
      fontFamily: "Arial, sans-serif",
    },
    container: {
      margin: "0 auto",
      padding: "20px 0 48px 0",
      width: "580px",
      maxWidth: "100%",
    },
    avatar: {
      display: "block",
      margin: "0 auto",
      marginBottom: "16px",
      borderRadius: "50%",
    },
    title: {
      fontSize: "32px",
      lineHeight: "1.3",
      fontWeight: "bold",
      color: "#484848",
      marginBottom: "16px",
    },
    reviewBox: {
    
      fontSize: "18px",
      FontStyle:"italic",
      lineHeight: "1.4",
      color: "#484848",
      padding: "24px",
      backgroundColor: "#f2f3f3",
      borderRadius: "6px",
      marginBottom: "20px",
    },
    text: {
      fontSize: "18px",
      lineHeight: "1.4",
      color: "#484848",
      marginBottom: "16px",
    },
    button: {
      backgroundColor: "#ff5a5f",
      color: "#ffffff",
      fontSize: "18px",
      padding: "19px 30px",
      textDecoration: "none",
      borderRadius: "4px",
      display: "inline-block",
    },
    sectionTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#484848",
      marginBottom: "10px",
    },
    faqLink: {
      fontSize: "18px",
      color: "#ff5a5f",
      textDecoration: "none",
      display: "block",
      marginBottom: "10px",
    },
    footerText: {
      color: "#9ca299",
      fontSize: "14px",
      lineHeight: "24px",
      marginBottom: "10px",
    },
    footerLink: {
      fontSize: "14px",
      color: "#9ca299",
      textDecoration: "underline",
    },
    hr: {
      border: "1px solid #cccccc",
      margin: "20px 0",
    },
  };

export default function ProposalEmail ({authorName, authorOrganization, message, howHeard, phoneNumber}: Props) {
   return (
      <Html>
      <Head />
      <Body style={styles.body}>
        <Preview>Propuesta de negocio por {authorName} de {authorOrganization}</Preview>

        <Container style={styles.container}>
        <Section>
              <Img
                src={'https://i.postimg.cc/Hndmr0bV/dinort_logo.png'}
                width="150"
                height="80"
                alt="Dinort Mecanizados S.A.S"
              />
            </Section>

          <Section style={{paddingTop:'12px'}}>
            <Row>
              <Text style={styles.title}>{authorName} de {authorOrganization} escribio</Text>

              <Text style={styles.reviewBox}>"{message}"</Text>
            </Row>
          </Section>
          <Hr style={styles.hr} />

          <Section>
            <Row>
              <Text style={styles.title}>Detalles del mensaje</Text>
              <Text className="text-[#9ca299] text-[14px] leading-[24px] mb-2.5">Nombre: {authorName}</Text>
              <Text className="text-[#9ca299] text-[14px] leading-[24px] mb-2.5">Organizacion: {authorOrganization}</Text>
              <Text className="text-[#9ca299] text-[14px] leading-[24px] mb-2.5">Telefono: {phoneNumber}</Text>
              <Text className="text-[#9ca299] text-[14px] leading-[24px] mb-2.5">Escucho de nosotros: {howHeard}</Text>
            </Row>
          </Section>



          <Hr style={styles.hr} />
          <Section>
              <Row>
                <Text className="text-[#9ca299] text-[14px] leading-[24px] mb-2.5">
                  Dinort Mecanizados S.A.S,  Ramirez de Velazco 1350, San Miguel de Tucumán, Argentina
                </Text>
              </Row>
            </Section>
        </Container>
      </Body>
    </Html>

   )
} 