'use client'

import type { SearchResults as TypeSearchResults } from '@/lib/types'
import { StreamableValue, useStreamableValue } from 'ai/rsc'
import { SearchResults } from './search-results'
import { SearchSkeleton } from './search-skeleton'
import { Section } from './section'
import { ToolBadge } from './tool-badge'

export type SearchSectionProps = {
  result?: StreamableValue<string>
}

export function SearchSection({ result }: SearchSectionProps) {
  const [data, error, pending] = useStreamableValue(result)
  const searchResults: TypeSearchResults = data ? JSON.parse(data) : undefined
  return (
    <div>
      {!pending && data ? (
        <>
          <Section size="sm" className="pt-2 pb-0">
            <ToolBadge tool="search">{`${searchResults.query}`}</ToolBadge>
          </Section>
          <Section title="Results">
            <SearchResults results={searchResults.results} />
          </Section>
        </>
      ) : (
        <Section className="pt-2 pb-0">
          <SearchSkeleton />
        </Section>
      )}
    </div>
  )
}
