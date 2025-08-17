import { createClient } from 'next-sanity'
import { QueryParams } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
}: {
  query: string;
  params?: QueryParams;
}) {
  return client.fetch<QueryResponse>(query, params, {
    perspective: "published",
    useCdn: true,
    next: { revalidate: 30 },
  });
}