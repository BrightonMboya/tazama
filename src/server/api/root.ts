import { createTRPCRouter } from "~/server/api/trpc";
import { emailRouter } from "./routers/sendEmail";
import { planMyTrip } from "./routers/form";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  email: emailRouter,
  planMyTrip
});

// export type definition of API
export type AppRouter = typeof appRouter;
