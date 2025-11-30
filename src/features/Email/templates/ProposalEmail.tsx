import * as React from 'react';

import {
    Html,
    Head,
    Body,
    Preview,
    Container,
    Section,
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