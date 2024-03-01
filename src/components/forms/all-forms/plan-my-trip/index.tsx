import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogPortal,
} from "~/components/ui/dialog";
import PlanMyTripForm from "~/components/forms/all-forms/plan-my-trip/AllQuestions";

export default function PlanMyTrip() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Dialog>
        <DialogTrigger
          asChild
          className="font-now bg-primary font-medium text-white lg:text-xl"
        >
          <Button variant="outline">Plan My Trip</Button>
        </DialogTrigger>
        <DialogPortal>
          <DialogContent className="bg-lightest h-screen sm:max-w-[80%] lg:h-[70%] lg:w-[60%]">
            <DialogHeader></DialogHeader>
            <PlanMyTripForm />
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
}
