import { createTRPCRouter, publicProcedure } from "../trpc";
import z from "zod";
import { Resend } from "resend";
import { planMyTripSchema } from "~/components/forms/all-forms/plan-my-trip/AllQuestions";
import PlanMyTripEmail from "~/components/emails/PlanMyTripEmail";

const resend = new Resend("re_5A9iLua7_Jiu4oZVJpW3k7aGpEPAWScAC");
export const emailRouter = createTRPCRouter({
  send: publicProcedure.input(planMyTripSchema).mutation(async ({ input }) => {
    const response = await resend.emails.send({
      from: "Shamba-Data <newsletter@shamba-data.com>",
      to: "brighton.mboya.io@gmail.com",
      // reply_to: 'b.mboya@alustudent.com',
      subject: "Shamba Data Update",
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
  }),
});
