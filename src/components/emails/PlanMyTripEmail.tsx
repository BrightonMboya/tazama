"use client";
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
  Row,
} from "@react-email/components";
import { Font } from "@react-email/font";
import * as React from "react";

interface EmailProps {
  tripType: string;
  addOns: string;
  planningProcess: string;
  numberOfGuests: string;
  budget: string;
  dateofTravel: string;
  additionalPlans: string;
  mustSeePlans: string;
  additionalComments?: string;
  firstName: string;
  lastName: string;
  email: string;
}

export default function Email(props: EmailProps) {
  const defaultTheme = require("tailwindcss/defaultTheme");
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            fontFamily: {
              sans: ["Inter", ...defaultTheme.fontFamily.sans],
              display: ["Lexend", ...defaultTheme.fontFamily.sans],
            },
          },
        },
      }}
    >
      <Head />
      <Html>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Preview>August Product & Growth Update</Preview>
        <Body style={main}>
          <Container className="mx-auto my-0 w-full max-w-[680px] bg-white">
            <Row className="relative flex flex-col rounded-t-[5px] bg-black">
              <Img
                // width={146}
                height={200}
                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1708503376/about/kdn3adaglqhebzttfttk.jpg"
                className=" placeholder rounded-t-md opacity-50"
              />

              {/* <Text className="absolute  bottom-0 text-white text-xl pl-5">New Trip</Text> */}
            </Row>

            <Section className="ml-[20px] mt-[20px] max-w-md lg:max-w-[38rem]">
              <Heading
                as="h2"
                className="text-xl font-bold leading-[21px] text-[#0c0d0e]"
              >
                You got new Inquiry
              </Heading>
              <Text className=" text-base leading-[27px] text-[#3c3f44]">
                {`Summary of ${props.firstName} ${props.lastName} inquiry`}
              </Text>

              <Row className="gap-3">
                <Text className=" text-lg font-medium leading-[27px] text-[#0c0d0e]">
                  Guest Full Names
                </Text>
                <Text className="text-base">{`${props.firstName} ${props.lastName}`}</Text>
              </Row>
              <Row className="gap-3">
                <Text className=" text-lg font-medium leading-[27px] text-[#0c0d0e]">
                  Email
                </Text>
                <Text className="text-base">{props.email}</Text>
              </Row>

              <Row className="gap-3">
                <Text className=" text-lg font-medium leading-[27px] text-[#0c0d0e]">
                  Type of trip the guest is interested in
                </Text>
                <Text className="text-base">{props.tripType}</Text>
              </Row>

              <Row className="gap-3">
                <Text className=" text-lg font-medium leading-[27px] text-[#0c0d0e]">
                  {`${props.firstName} would like to add the following on this trip`}
                </Text>
                <Text className="text-base">{props.addOns}</Text>
              </Row>

              <Row className="gap-3">
                <Text className=" text-lg font-medium leading-[27px] text-[#0c0d0e]">
                  How far the guest is on the planning Process
                </Text>
                <Text className="text-base">{props.planningProcess}</Text>
              </Row>

              <Row className="gap-3">
                <Text className=" text-lg font-medium leading-[27px] text-[#0c0d0e]">
                  Number of Guests
                </Text>
                <Text className="text-base">{props.numberOfGuests}</Text>
              </Row>

              <Row className="gap-3">
                <Text className=" text-lg font-medium leading-[27px] text-[#0c0d0e]">
                  {`${props.firstName} wants to travel on the following date`}
                </Text>
                <Text className="text-base">{props.dateofTravel}</Text>
              </Row>
              <Row className="gap-3">
                <Text className=" text-lg font-medium leading-[27px] text-[#0c0d0e]">
                  {`${props.firstName} has this budget fro this trip`}
                </Text>
                <Text className="text-base">{props.budget}</Text>
              </Row>

              <Row className="gap-3">
                <Text className=" text-lg font-medium leading-[27px] text-[#0c0d0e]">
                  {`${props.firstName} has this to say regardless on the extra plans for this trip`}
                </Text>
                <Text className="text-base">{props.additionalPlans}</Text>
              </Row>

              <Row className="gap-3">
                <Text className=" text-lg font-medium leading-[27px] text-[#0c0d0e]">
                  {`${props.firstName} has these specifics wildlife experiences he/she would want to see`}
                </Text>
                <Text className="text-base">{props.mustSeePlans}</Text>
              </Row>

              <Row className="gap-3">
                <Text className=" text-lg font-medium leading-[27px] text-[#0c0d0e]">
                  Additional comments
                </Text>
                <Text className="text-base">{props.additionalComments}</Text>
              </Row>
              <Hr style={divider} />
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}

const main = {
  backgroundColor: "#f3f3f5",
  // fontFamily: "Montserrat, sans-serif",
};

const divider = {
  margin: "0",
};
