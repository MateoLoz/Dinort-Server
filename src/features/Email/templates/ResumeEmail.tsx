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
    Link,
    Column
  } from "@react-email/components";

  interface Props  {
    authorName : string;
    coverLetter?: string | null;
    email:string;
    Curriculum : string;
    howHeard: string;
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
export default function ResumeEmail ({ authorName, email, coverLetter, howHeard, Curriculum }: Props) {
   return (
      <Html>
      <Head />
      <Body style={styles.body}>
        <Preview>Curriculum de {authorName}</Preview>

        <Container style={styles.container}>
        <Section>
              <Img
                src={'https://i.postimg.cc/Hndmr0bV/dinort_logo.png'}
                width="150"
                height="80"
                alt="Dinort Mecanizados S.A.S"
              />
            </Section>
         
          { coverLetter?.length 
          ? <Section style={{paddingTop:'12px'}}>
            <Row>
              <Text style={styles.title}>Carta de presentacion de {authorName}</Text>

              <Text style={styles.reviewBox}>{coverLetter}</Text>
            </Row>
          </Section> 
          : null }
         
<Section style={{paddingTop:'12px'}}>
  <Row style={{ marginBottom: '8px' }}>
    <Column
      style={{
        minHeight: '112px',
        width:'80vw',
        borderRadius: '16px',
        backgroundColor: '#f3f4f6',
        padding: '16px',
      }}
    >
      <p
        style={{
          marginBottom: '0',
          fontSize: '24px',
          lineHeight: '32px',
          fontWeight: 'bold',
          letterSpacing: '-0.025em',
          fontVariantNumeric: 'tabular-nums',
          color: '#111827',
        }}
      >
       {authorName}
      </p>
      <div style={{ color: '#374151' }}>
        <p
          style={{ marginBottom: '0', fontSize: '15px', lineHeight: '22px', textDecoration:'none', color:'#000' }}
        >
          {email}
        </p>
        <p
          style={{
            marginBottom: '0',
            marginTop: '4px',
            fontSize: '13px',
            lineHeight: '18px',
            color: '#4b5563',
          }}
        >
          Nombre y Email del candidato 
        </p>
      </div>
    </Column>
  </Row>
  <Row style={{ marginBottom: '8px' }}>
    <Column
      style={{
        minHeight: '192px',
        width:'80vw',
        borderRadius: '16px',
        backgroundColor: '#FDCB5A',
        padding: '16px',
      }}
    >
      <p
        style={{
          marginBottom: '0',
          fontSize: '24px',
          lineHeight: '32px',
          fontWeight: 'bold',
          letterSpacing: '-0.025em',
          fontVariantNumeric: 'tabular-nums',
          color: '#000',
        }}
      >
        Fuente
      </p>
      <div>
        <p
          style={{ marginBottom: '0', fontSize: '15px', lineHeight: '22px', color:'#1c1c1c', fontWeight: 'normal' }}
        >
         {howHeard}
        </p>
        <p
          style={{
            marginBottom: '0',
            marginTop: '4px',
            fontSize: '13px',
            lineHeight: '18px',
            color: '#353536',
          }}
        >
          Nos conocio a travez de {howHeard}
        </p>
      </div>
    </Column>
  </Row>
  <Row>
    <Column
      style={{
        minHeight: '128px',
        width:'80vw',
        borderRadius: '16px',
        backgroundColor: '#001129',
        padding: '16px',
      }}
    >
      <p
        style={{
          marginBottom: '0',
          fontSize: '24px',
          lineHeight: '32px',
          fontWeight: 'bold',
          letterSpacing: '-0.025em',
          fontVariantNumeric: 'tabular-nums',
          color: '#eef2ff',
        }}
      >
        Curriculum
      </p>
      <div style={{ color: '#B7B7B7' }}>
        <p
          style={{ marginBottom: '0', fontSize: '15px', lineHeight: '22px', color: '#B7B7B7' }}
        >
          El Curriculum que nos envio el candidato {authorName}
        </p>
        <p
          style={{
            marginBottom: '0',
            marginTop: '4px',
            fontSize: '13px',
            lineHeight: '18px',
          }}
        >
        <Link style={{textDecoration: 'underline', color:'#fff', fontWeight:'normal'}} href={Curriculum}>{authorName} cv</Link>
        </p>
      </div>
    </Column>
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