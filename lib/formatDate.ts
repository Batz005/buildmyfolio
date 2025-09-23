const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

export function formatYearMonth(isoYearMonth?: string): string | undefined {
  if (!isoYearMonth) return undefined
  const [yearStr, monthStr] = isoYearMonth.split('-')
  const year = Number(yearStr)
  const month = Number(monthStr)
  if (!year || !month || month < 1 || month > 12) return isoYearMonth
  return `${MONTHS[month - 1]} ${year}`
}

export function formatRange(start?: string, end?: string): string {
  const startStr = formatYearMonth(start)
  const endStr = end ? formatYearMonth(end) : 'Present'
  if (!startStr) return endStr || ''
  return `${startStr} — ${endStr}`
}


