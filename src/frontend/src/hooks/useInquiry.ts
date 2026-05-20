import { createActor } from "@/backend";
import type { InquiryFormData } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation } from "@tanstack/react-query";

export function useInquiry() {
  const { actor } = useActor(createActor);

  const mutation = useMutation({
    mutationFn: async (data: InquiryFormData) => {
      if (!actor) throw new Error("Actor not available");
      const result = await actor.submitInquiry(
        data.name,
        data.phone,
        data.propertyInterest,
        data.message,
        data.propertyId,
      );
      if (result.__kind__ === "err") {
        throw new Error(result.err);
      }
      return result.ok;
    },
  });

  return {
    submitInquiry: mutation.mutateAsync,
    isSubmitting: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    reset: mutation.reset,
  };
}
