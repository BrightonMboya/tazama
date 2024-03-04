import {
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  Question9,
  ContactForm,
  WelcomeNote,
} from "./Questions";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { api } from "~/lib/api";
import Spinner from "~/components/ui/spinner";
import { useRouter } from "next/router";

export const planMyTripSchema = z.object({
  tripType: z.string(),
  addOns: z.string(),
  planningProcess: z.string(),
  numberOfGuests: z.string(),
  budget: z.string(),
  dateofTravel: z.string(),
  additionalPlans: z.string(),
  mustSeePlans: z.string(),
  additionalComments: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
});

export type PlanMyTripType = z.infer<typeof planMyTripSchema>;

const PlanMyTripForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<PlanMyTripType>({
    resolver: zodResolver(planMyTripSchema),
    mode: "onChange",
  });
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(0);
  const { mutateAsync, isLoading } = api.email.send.useMutation({
    onSuccess: () => {
      router.push("/thank-you");
    },
  });

  const onSubmit: SubmitHandler<PlanMyTripType> = (data) => {
    // console.log(data);
    mutateAsync({
      tripType: data.tripType,
      addOns: data.addOns,
      planningProcess: data.planningProcess,
      numberOfGuests: data.numberOfGuests,
      budget: data.budget,
      dateofTravel: data.dateofTravel,
      additionalPlans: data.additionalPlans,
      mustSeePlans: data.mustSeePlans,
      additionalComments: data.additionalComments,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    });
  };

  // console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="font-now">
      {currentPage === 0 && (
        <WelcomeNote
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === 1 && (
        <Question1
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setValue={setValue}
        />
      )}
      {currentPage === 2 && (
        <Question2
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setValue={setValue}
        />
      )}
      {currentPage === 3 && (
        <Question3
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setValue={setValue}
        />
      )}
      {currentPage === 4 && <Question4 register={register} />}
      {currentPage === 5 && (
        <Question5
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setValue={setValue}
        />
      )}
      {currentPage === 6 && <Question6 register={register} />}
      {currentPage === 7 && <Question7 register={register} />}
      {currentPage === 8 && <Question8 register={register} />}
      {currentPage === 9 && <Question9 register={register} />}
      {currentPage === 10 && <ContactForm register={register} />}
      {/* {currentPage === 10 && errors && (
        <p className="text-red-500">
          Looks like you didnt answer some questions :({" "}
        </p>
      )} */}

      {currentPage > 0 && (
        <div className="font-now mt-5 space-x-5 text-white">
          <Button
            disabled={currentPage <= 1}
            type="button"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </Button>
          <Button
            // disabled={currentPage >= 5}
            onClick={() => setCurrentPage(currentPage + 1)}
            type="button"
          >
            Next
          </Button>
          {currentPage >= 10 && (
            <Button type="submit" disabled={isLoading}>
              {isLoading ? <Spinner /> : "Save"}
            </Button>
          )}
        </div>
      )}
    </form>
  );
};

export default PlanMyTripForm;
