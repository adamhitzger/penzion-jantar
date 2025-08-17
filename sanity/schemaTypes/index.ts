import { type SchemaTypeDefinition } from 'sanity'
import { homepageSchema } from './homepage'
import { reviews } from './reviews'
import { lokalita } from './okoli'
import { pokoj } from './rooms'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepageSchema, reviews, lokalita, pokoj],
}
