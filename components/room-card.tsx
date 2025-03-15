import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

interface RoomCardProps {
  title: string
  description: string
  price: number
  image: string
  features: string[]
}

export function RoomCard({ title, description, price, image, features }: RoomCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[200px] w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-2xl font-bold">
            ₹{price}
            <span className="text-sm font-normal text-muted-foreground">/night</span>
          </div>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="/contact">Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

