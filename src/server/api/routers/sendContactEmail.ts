import { createTRPCRouter, publicProcedure } from "../trpc";
import { Resend } from "resend";
import ContactEmail from "~/components/emails/ContactUs";
import posthog from "posthog-js";
import z from "zod";
import AppendNewLeads from "~/lib/google-sheets";
import { env } from "~/env";
import { format } from "date-fns";

const resend = new Resend("re_dbr9K3ya_4Wq4Tx5SGiAgEA2vbKpdi8aW");

const contactEmailSchema = z.object({
  email: z.string(),
  fullNames: z.string(),
  message: z.string(),
});

export const ContactEmailRouter = createTRPCRouter({
  send: publicProcedure
    .input(contactEmailSchema)
    .mutation(async ({ input }) => {
      try {
        const response = await resend.emails.send({
          from: "james@tazamaafricasafari.com",
          to: "info@tazamaafricasafari.com",
          cc: "jaff@tazamaafricasafari.com",
          subject: "New Tazama Contact Form",
          react: ContactEmail({
            email: input.email,
            fullNames: input.fullNames,
            message: input.message,
          }),
        });
        // console.log("the Response", response);
        // return response;
        return AppendNewLeads(
          env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
          "contact_form_leads",
          [
            input.fullNames || "",
            input.email || "",
            input.message || "",
            format(new Date(), "PPP"),
          ],
        );
      } catch (cause) {
        console.log(cause);
        posthog.capture("Email failed to get sent");
      }
    }),
});
