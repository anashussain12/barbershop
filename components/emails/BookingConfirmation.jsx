// components/emails/BookingConfirmation.jsx
import { Html, Head, Body, Container, Section, Text, Heading, Tailwind } from "@react-email/components";

export default function BookingConfirmation({ bookingDetails }) {
  const total = bookingDetails.servicesWithPrices.reduce(
    (sum, service) => sum + parseInt(service.price.replace(/\D/g, '')), 0
  );

  return (
    <Tailwind>
      <Html/>
        <Head />
        <Body className="bg-white font-sans">
          <Container className="max-w-2xl mx-auto p-4">
            <Heading className="text-2xl font-bold text-amber-600">
              Booking Confirmed!
            </Heading>
            
            <Section className="my-6">
              <Text className="text-lg">
                Hi {bookingDetails.firstName}, your appointment is confirmed!
              </Text>
              
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <Text className="font-semibold">Booking Details:</Text>
                <Text>📍 Location: {bookingDetails.location}</Text>
                <Text>✂️ Barber: {bookingDetails.barber}</Text>
                <Text>📅 Date: {bookingDetails.date}</Text>
                <Text>⏰ Time: {bookingDetails.time}</Text>
                
                <Text className="mt-3 font-semibold">Services:</Text>
                <ul>
                  {bookingDetails.servicesWithPrices.map((service, index) => (
                    <li key={index}>
                      {service.name} - {service.price}
                    </li>
                  ))}
                </ul>
                
                <Text className="mt-3 font-bold">
                  Total: ${total} + Tax
                </Text>
              </div>
            </Section>
            
            <Text className="text-gray-600">
              We'll see you soon at the salon!
            </Text>
          </Container>
        </Body>
      </Tailwind>
  );
}