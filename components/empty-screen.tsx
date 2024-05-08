import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'Nous gérons une crèmerie enregistrée, ...',
    message:
      "Nous gérons une crèmerie enregistrée, composée de deux associés. Nous sommes inscrits à la MAPAQ et avons un numéro de taxe. Actuellement, nous envisageons d'investir dans une nouvelle machine à crème glacée. Pouvez-vous nous informer sur les aides disponibles dans cette situation ?"
  },
  {
    heading: 'Tesla vs Rivian',
    message: 'Tesla vs Rivian'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
