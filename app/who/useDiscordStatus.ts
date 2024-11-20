import { useState, useEffect } from 'react'

export function useDiscordStatus(discordId: string) {
  const [status, setStatus] = useState<any>(null)

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`)
        const data = await response.json()
        if (data.success) {
          setStatus(data.data)
        } else {
          console.error('Failed to fetch Discord status:', data.error)
        }
      } catch (error) {
        console.error('Error fetching Discord status:', error)
      }
    }

    fetchStatus()
    const interval = setInterval(fetchStatus, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [discordId])

  return status
}