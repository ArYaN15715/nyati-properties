import { createActor } from "@/backend";
import type { Property } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";

export function useProperties() {
  const { actor, isFetching } = useActor(createActor);

  const {
    data: properties = [],
    isLoading: isLoadingAll,
    error: errorAll,
  } = useQuery<Property[]>({
    queryKey: ["properties"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.getProperties();
      return result as Property[];
    },
    enabled: !!actor && !isFetching,
  });

  const {
    data: featuredProperties = [],
    isLoading: isLoadingFeatured,
    error: errorFeatured,
  } = useQuery<Property[]>({
    queryKey: ["featuredProperties"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.getFeaturedProperties();
      return result as Property[];
    },
    enabled: !!actor && !isFetching,
  });

  return {
    properties,
    featuredProperties,
    isLoading: isLoadingAll || isLoadingFeatured || isFetching,
    error: errorAll || errorFeatured,
  };
}

export function useProperty(id: bigint | null) {
  const { actor, isFetching } = useActor(createActor);

  return useQuery<Property | null>({
    queryKey: ["property", id?.toString()],
    queryFn: async () => {
      if (!actor || id === null) return null;
      return actor.getProperty(id) as Promise<Property | null>;
    },
    enabled: !!actor && !isFetching && id !== null,
  });
}
