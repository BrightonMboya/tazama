import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogPortal,
} from "~/components/ui/dialog";
import PlanMyTripForm from "~/components/forms/all-forms/plan-my-trip/AllQuestions";

export default function PlanMyTrip() {
  return (
    <div className="">
      <Dialog>
        <DialogTrigger
          asChild
          className="font-now bg-primary px-2 font-medium text-white"
        >
          <Button variant="outline">Plan My Trip</Button>
        </DialogTrigger>
        <DialogPortal>
          <DialogContent className="h-screen bg-lightest sm:max-w-[80%] lg:h-[70%] lg:w-[60%]">
            <DialogHeader></DialogHeader>
            <PlanMyTripForm />
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
}
