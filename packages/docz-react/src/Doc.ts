import { Doc } from 'docz/doc'
import { cache } from './Docs'

export const doc = (name: string): Doc => {
  const newDoc = new Doc(name)

  cache.set(name, newDoc)
  return newDoc
}
