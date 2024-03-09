import { createTRPCRouter, publicProcedure } from "../trpc";
import { Resend } from "resend";
import { planMyTripSchema } from "~/components/forms/all-forms/plan-my-trip/AllQuestions";
import PlanMyTripEmail from "~/components/emails/PlanMyTripEmail";
import posthog from "posthog-js";

const resend = new Resend("re_dbr9K3ya_4Wq4Tx5SGiAgEA2vbKpdi8aW");

export const emailRouter = createTRPCRouter({
  send: publicProcedure.input(planMyTripSchema).mutation(async ({ input }) => {
    try {
      const response = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "info@tazamaafricasafari.com",
        // reply_to: 'b.mboya@alustudent.com',
        subject: "New Form Enquiry",
        react: PlanMyTripEmail({
          tripType: input.tripType,
          addOns: input.addOns,
          planningProcess: input.planningProcess,
          numberOfGuests: input.numberOfGuests,
          budget: input.budget,
          dateofTravel: input.dateofTravel,
          additionalPlans: input.additionalPlans,
          mustSeePlans: input.mustSeePlans,
          additionalComments: input.additionalComments,
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
        }),
      });
      console.log("the Response", response);
      return response;
    } catch (cause) {
      console.log(cause);
      posthog.capture("Email failed to get sent")
    }
  }),
});
